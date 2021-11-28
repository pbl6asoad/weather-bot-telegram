const transformTemperature = ({ temp, feels_like, pressure, humidity}) => `
Температура: ${temp}🌡️
Ощущается как ${feels_like}🤒
Давление ${pressure}⚽️
Влажность ${humidity}%💧
`

module.exports = {
  transformTemperature
}