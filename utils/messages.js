const { stickers } = require('./constants')
const { forecast } = require('../forecast')
const { geocode } = require('../geocode')
const { transformTemperature } = require('./helper')

const handleMessage = async (bot, { 
  text, 
  chat: { 
    id: chatId
  },
  from: {
    first_name,
    username,
    last_name
  }
}) => {
  const [command, messageText] = text.split(' ')

  switch(command){
    case '/start':
      return bot.sendMessage(chatId, 'Выберите /info для того, чтобы узнать больше о боте')
    case '/info':
      return bot.sendMessage(
        chatId, 
        `Привет, ${first_name || username}! Этот бот написан @pbl6asoad и в нем ты можешь оформить на ежедневную подписку на погоду для указанных городов (не более 3). Чтобы добавить город напишите /add *Название города*`
      )
    case '/add':
      const city = await geocode(messageText, async (err, {location, latitude, longtitude}) => {
        debugger
        await bot.sendMessage(chatId, `Вы подписались на уведомления о погоде в городе ${location}`)
        debugger
        await forecast(latitude, longtitude, (err, { main } = {}) => {
          if(err) return bot.sendMessage(chatId, 'Извините, не смогли определить погоду в вашем городе')
          debugger
          return bot.sendMessage(chatId, 
            `Погода в городе ${location}:
            ${transformTemperature(main)}
            `)
        })
      })
      break;
    default: 
      await bot.sendMessage(
        chatId, 
        `Извини, я не знаю такой команды🥺, попробуй другую`
      )
      return bot.sendSticker(chatId, stickers.sunset) 
  }

}


module.exports = {
  handleMessage,
}