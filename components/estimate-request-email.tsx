type EstimateRequestEmailProps = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const detailLabel = {
  margin: '0 0 6px',
  color: '#65706b',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
}

const detailValue = {
  margin: 0,
  color: '#171a18',
  fontSize: '16px',
  lineHeight: 1.6,
}

export function EstimateRequestEmail({
  name,
  phone,
  email,
  service,
  message,
}: EstimateRequestEmailProps) {
  return (
    <div
      style={{
        margin: 0,
        padding: '32px 20px',
        backgroundColor: '#f3f0e7',
        color: '#171a18',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div style={{ margin: '0 auto', maxWidth: '620px' }}>
        <div
          style={{
            padding: '28px 30px',
            backgroundColor: '#102019',
            color: '#f3f0e7',
          }}
        >
          <p
            style={{
              margin: '0 0 12px',
              color: '#d5ee72',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            New website inquiry
          </p>
          <h1 style={{ margin: 0, fontSize: '30px', lineHeight: 1.05 }}>
            Estimate request from {name}
          </h1>
        </div>

        <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
          <div style={{ marginBottom: '22px' }}>
            <p style={detailLabel}>Phone</p>
            <p style={detailValue}>{phone}</p>
          </div>
          <div style={{ marginBottom: '22px' }}>
            <p style={detailLabel}>Email</p>
            <p style={detailValue}>{email || 'Not provided'}</p>
          </div>
          <div style={{ marginBottom: '22px' }}>
            <p style={detailLabel}>Service</p>
            <p style={detailValue}>{service || 'Not selected'}</p>
          </div>
          <div>
            <p style={detailLabel}>Property details</p>
            <p style={{ ...detailValue, whiteSpace: 'pre-wrap' }}>
              {message || 'No additional details provided.'}
            </p>
          </div>
        </div>

        <p style={{ margin: '16px 0 0', color: '#65706b', fontSize: '12px', lineHeight: 1.5 }}>
          {email
            ? `Reply to this email to respond directly to ${name}.`
            : `${name} did not provide an email address; follow up by phone.`}
        </p>
      </div>
    </div>
  )
}
