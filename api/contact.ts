import nodemailer from 'nodemailer'

type ContactBody = {
  firstName?: string
  lastName?: string
  email?: string
  message?: string
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { firstName, lastName, email, message } = (req.body ||
    {}) as ContactBody

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes.' })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido.' })
  }

  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.EMAIL_TO || 'tiagosm0203@gmail.com'
  const from = process.env.EMAIL_FROM || user
  const secure = process.env.SMTP_SECURE === 'true' || port === 465

  if (!host || !user || !pass || !from) {
    return res.status(500).json({
      error:
        'Env de SMTP ausentes. Defina SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS e EMAIL_FROM.',
    })
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  })

  const subject = `Contato do site - ${firstName} ${lastName}`
  const text = `Nome: ${firstName} ${lastName}\nEmail: ${email}\n\nMensagem:\n${message}`
  const html = `
    <div>
      <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="white-space: pre-line">${message}</p>
    </div>
  `

  try {
    await transporter.sendMail({ from, to, subject, text, html })
    return res.status(200).json({ ok: true })
  } catch (err: any) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Falha ao enviar email.' })
  }
}
