type EstimateRequestEmailProps = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] ?? character)
}

function detail(label: string, value: string) {
  return `
    <div style="margin-bottom:22px">
      <p style="margin:0 0 6px;color:#65706b;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase">${label}</p>
      <p style="margin:0;color:#171a18;font-size:16px;line-height:1.6">${value}</p>
    </div>`
}

/**
 * Resend accepts an HTML body directly. Building the bounded markup here avoids
 * a second email workflow and does not require a runtime React-email renderer.
 */
export function EstimateRequestEmail({
  name,
  phone,
  email,
  service,
  message,
}: EstimateRequestEmailProps) {
  const safeName = escapeHtml(name)
  const safeMessage = escapeHtml(message || 'No additional details provided.').replace(/\r?\n/g, '<br>')

  return `<!doctype html>
  <html lang="en">
    <body style="margin:0;padding:32px 20px;background:#f3f0e7;color:#171a18;font-family:Arial,Helvetica,sans-serif">
      <div style="margin:0 auto;max-width:620px">
        <div style="padding:28px 30px;background:#102019;color:#f3f0e7">
          <p style="margin:0 0 12px;color:#d5ee72;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase">New website inquiry</p>
          <h1 style="margin:0;font-size:30px;line-height:1.05">Estimate request from ${safeName}</h1>
        </div>
        <div style="padding:30px;background:#fff">
          ${detail('Phone', escapeHtml(phone))}
          ${detail('Email', escapeHtml(email || 'Not provided'))}
          ${detail('Service', escapeHtml(service || 'Not selected'))}
          ${detail('Property details', safeMessage)}
        </div>
        <p style="margin:16px 0 0;color:#65706b;font-size:12px;line-height:1.5">
          ${email
            ? `Reply to this email to respond directly to ${safeName}.`
            : `${safeName} did not provide an email address; follow up by phone.`}
        </p>
      </div>
    </body>
  </html>`
}
