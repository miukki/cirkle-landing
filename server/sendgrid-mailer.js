


const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const config = require('./config.js')

const {sendgridApiKey, receiver} = config;


// //process.env.SENDGRID_API
const transporter = nodemailer.createTransport(sgTransport({
  auth: {
    api_key: sendgridApiKey
  }
}))

const SendEmail = ({ email, name, text='Submit Request from the Cirkle Website' }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  console.log('from', from);
  const message = {
    from,
    to: receiver,
    subject: `Cirkle Submit from Website ${from}`,
    text,
    html: '<b>Submit Request from the Cirkle Website</b>',
    replyTo: from
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, resp) =>
      error ? reject(error) : resolve(resp)
    )
  })
}

module.exports = SendEmail;