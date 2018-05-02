import express from 'express'
import BootBot from 'bootbot'

import appConfig from 'config/app'

import routes from './routes'

const app = express()

app.use('/', routes)

app.get('/', (req, res) => res.sendStatus(200))

app.use((req, res) => res.sendStatus(404))

const bot = new BootBot({
  accessToken: appConfig.fbAccessToken,
  verifyToken: appConfig.fbVerifyToken,
  appSecret: appConfig.fbAppSecret,
})

bot.on('message', (payload, chat) => {
  const text = payload.message.text
  chat.say(text)
})

bot.start()

export default app
