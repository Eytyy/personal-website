const { createClient } = require('contentful')
const { accessToken, space } = require('./config')
console.log(accessToken)
console.log(process.env.ACCESS_TOKEN)
module.exports = createClient({
  accessToken,
  space
})
