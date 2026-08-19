// c:\Users\User\Desktop\pini-doc\notnim-mehaneshama\src\config.js
export const DONATION_URL = 'https://meshulam.co.il/quick_payment?b=2122728e4b3b887c70ff541c875938ea'
export const WHATSAPP_CONTACT = 'https://wa.me/972506161679'

export function buildWhatsappShareUrl(donationUrl) {
  const lines = [
    'נותנים מהנשמה — לא משאירים ילד רעב',
    `תרמו עכשיו ועזרו לנו לדאוג שאף ילד לא יישאר רעב: ${donationUrl}`,
  ]
  return 'https://wa.me/?text=' + encodeURIComponent(lines.join('\n'))
}
