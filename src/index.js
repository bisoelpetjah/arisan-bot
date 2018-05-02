// import express from 'express'
import BootBot from 'bootbot'

import appConfig from 'config/app'

// const app = express()
//
// app.get('/', (req, res) => res.sendStatus(200))
//
// app.use((req, res) => res.sendStatus(404))

const bot = new BootBot({
  accessToken: appConfig.fbAccessToken,
  verifyToken: appConfig.fbVerifyToken,
  appSecret: appConfig.fbAppSecret,
})

bot.on('message', (payload, chat) => {
  console.log('message');
  const text = payload.message.text
  chat.say(text, { typing: true })
})

bot.start(process.env.PORT ? parseInt(process.env.PORT) : 3000)

// export default app
