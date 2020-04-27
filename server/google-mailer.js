const config = require('./config')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config,
  },
})

const SendEmail = ({
  email,
  name,
  text = 'Submit Request from the Cirkle Website',
}) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'julia@cirkle.shop',
    subject: `Cirkle Submit Request ${from}`,
    text,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, res) =>
      error ? reject(error) : resolve(res),
    )
  })
}
module.exports = SendEmail
