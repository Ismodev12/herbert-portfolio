// Netlify serverless function — proxies chat requests to the Groq API
// so the API key is never exposed on the client side.

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' }
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error('GROQ_API_KEY environment variable is not set')
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'GROQ_API_KEY not configured' }),
    }
  }

  try {
    const { messages } = JSON.parse(event.body)

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Messages array is required' }),
      }
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

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.6-27b',
        messages: [systemPrompt, ...messages],
        temperature: 0.7,
        max_tokens: 300,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Groq API error:', response.status, err)
      return {
        statusCode: 502,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Erreur API Groq', details: response.status }),
      }
    }

    const data = await response.json()
    const reply = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu répondre."

    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    }
  } catch (error) {
    console.error('Chat function error:', error.message || error)
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Erreur interne du serveur' }),
    }
  }
}
