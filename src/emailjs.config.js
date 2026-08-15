// ─────────────────────────────────────────────────────────────
//  CONFIGURATION EMAILJS
//  1. Créez un compte gratuit sur https://www.emailjs.com
//  2. « Email Services » → connectez votre Gmail (richjunior455@gmail.com) → copiez le SERVICE ID
//  3. « Email Templates » → ouvrez votre template → copiez le TEMPLATE ID (ex. template_xxxxxxx)
//     Variables du template (déjà en place) : {{name}}, {{email}}, {{title}}, {{message}}, {{time}}
//  4. « Account » → « General / API Keys » → copiez la PUBLIC KEY
//  5. Collez les valeurs manquantes ci-dessous (entre les guillemets) puis relancez le site.
// ─────────────────────────────────────────────────────────────

export const EMAILJS = {
  serviceId: 'service_u40abit',
  templateId: 'template_j3d93ei',
  publicKey: 'FaiuMeOzxE0DFT56V',
}

// Boîte de réception (utilisée en secours via mailto tant que EmailJS n'est pas configuré)
export const CONTACT_EMAIL = 'richjunior455@gmail.com'

// true dès que les 3 identifiants ci-dessus sont renseignés
export const isEmailjsConfigured = () =>
  ![EMAILJS.serviceId, EMAILJS.templateId, EMAILJS.publicKey].some(
    (v) => !v || v.startsWith('VOTRE_')
  )
