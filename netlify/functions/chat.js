// Netlify serverless function — proxies chat requests to the xAI Grok API
// so the API key is never exposed on the client side.

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const apiKey = process.env.GROK_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'GROK_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { messages } = await req.json()

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

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Grok API error:', err)
      return new Response(JSON.stringify({ error: 'Erreur API Grok' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre."

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Chat function error:', error)
    return new Response(JSON.stringify({ error: 'Erreur interne' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

export const config = {
  path: '/api/chat',
}
