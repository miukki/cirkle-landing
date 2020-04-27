const source = require('./source.json')
const dotenv = require('dotenv')

const result = dotenv.config()
if (result.error) {
  throw result.error
}
const {parsed: envs} = result

const receiver = 'anja.ishmukhametova@gmail.com'
const sendgridApiKey = envs.SENGRID_API_KEY
const config = {
  sendgridApiKey,
  receiver,
}

module.exports = config
