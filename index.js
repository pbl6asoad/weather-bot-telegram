const TelegramAPI = require('node-telegram-bot-api');
const { handleMessage } = require('./utils/messages')
const token = '2079554530:AAEfTyc8ncamhC83DzDp2DbdtJPbfYaJtUM'

const bot = new TelegramAPI(token, { polling: true })

bot.setMyCommands([
  { command: '/start', description: 'Greeting' },
  { command: '/info',  description: 'Info' }
])

bot.on('message', async msg => handleMessage(bot, msg))