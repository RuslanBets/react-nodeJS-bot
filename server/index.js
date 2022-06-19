const http = require('http')
const PORT = process.env.PORT || 5000
const token = '5412611409:AAF8WnNAPaRiXmWKLNU5hdBqdXCJTZwgvE0'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(token, { polling: true })
let id

bot.addListener('message', msg => {
  id = msg.chat.id
})




http.createServer((request, response) => {
  let url = request.url

  if (url === '/text') {
    let str = ''
    request.on('data', chunk => {
      str += chunk
    })
    request.on('end', () => {
      const {name, phone, email} = JSON.parse(str)
      let message = `name: ${name}
phone: ${phone}
email: ${email}`
      bot.sendMessage(id, message)
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.end('OK')
    })
  }

}).listen(PORT, () => {
  console.log('Server GO')
})