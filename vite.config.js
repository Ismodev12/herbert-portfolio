import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Inline plugin that handles /api/chat in dev so we don't need `netlify dev`
function devApiPlugin() {
  return {
    name: 'dev-api-chat',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        // Handle CORS preflight
        if (req.method === 'OPTIONS') {
          res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
          })
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        // Read body
        let body = ''
        for await (const chunk of req) body += chunk
        let parsed
        try {
          parsed = JSON.parse(body)
        } catch {
          res.writeHead(400, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Invalid JSON' }))
          return
        }

        const apiKey = process.env.GROQ_API_KEY
        if (!apiKey) {
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'GROQ_API_KEY not set in .env' }))
          return
        }

        const systemPrompt = {
          role: 'system',
          content: `Tu es l'assistant virtuel d'Herbert, un Funnel Builder & Monteur Vidéo IA professionnel basé au Bénin.

Ton rôle :
- Répondre aux questions des visiteurs sur les services d'Herbert (tunnels de vente, montage vidéo IA, personal branding, publicité vidéo).
- Être chaleureux, professionnel et concis (max 3-4 phrases par réponse).
- Si quelqu'un souhaite travailler avec Herbert, les diriger vers la section Contact du portfolio ou leur dire d'envoyer un message via le formulaire.
- Tu peux parler en français ou en anglais selon la langue du visiteur.
- Ne réponds PAS à des questions sans rapport avec les services d'Herbert (politique, maths, etc.). Redirige poliment vers les services proposés.

Services d'Herbert :
1. Tunnels de vente (Systeme.io) — pages de capture, pages de vente, upsells
2. Montage vidéo IA — vidéos publicitaires, personal branding
3. Création de sites web & landing pages
4. Publicités vidéo pour réseaux sociaux

Tarifs : Herbert préfère discuter des tarifs directement. Invite les visiteurs à le contacter.`,
        }

        try {
          const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
              model: 'qwen/qwen3.6-27b',
              messages: [systemPrompt, ...parsed.messages],
              temperature: 0.7,
              max_tokens: 300,
            }),
          })

          if (!response.ok) {
            const err = await response.text()
            console.error('Groq API error:', response.status, err)
            res.writeHead(502, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ error: 'Groq API error', details: response.status }))
            return
          }

          const data = await response.json()
          let reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre."
          // Strip <think>...</think> blocks that reasoning models include
          reply = reply.replace(/<think>[\s\S]*?<\/think>\s*/g, '').trim()
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ reply }))
        } catch (err) {
          console.error('Dev API error:', err)
          res.writeHead(500, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ error: 'Internal server error' }))
        }
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // Load .env variables so the dev plugin can access them
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [react(), devApiPlugin()],
  }
})
