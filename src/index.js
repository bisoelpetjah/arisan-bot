import BootBot from 'bootbot'

import appConfig from 'config/app'
import botConfig from 'config/bot'

import { sendMainMenu } from './bot/main'
import { sendGroupList, convoJoinGroup, convoAssembleGroup, sendDisbandGroup, postbackDisbandGroupById } from './bot/groups'

const bot = new BootBot({
  accessToken: appConfig.fbAccessToken,
  verifyToken: appConfig.fbVerifyToken,
  appSecret: appConfig.fbAppSecret,
})

const groups = [
  {
    id: '1',
    title: 'Dog lovers',
  },
  {
    id: '2',
    title: 'Cat lovers',
  },
]

bot.on('message', (payload, chat) => {
  sendMainMenu(chat)
})

bot.on(`postback:${botConfig.postbackActions.listGroup}`, (payload, chat) => {
  sendGroupList(chat, groups, botConfig.postbackActions.groupOptionsById)
})

bot.on(`postback:${botConfig.postbackActions.joinGroup}`, (payload, chat) => {
  convoJoinGroup(chat)
})

bot.on(`postback:${botConfig.postbackActions.assembleGroup}`, (payload, chat) => {
  convoAssembleGroup(chat)
})

bot.on(`postback:${botConfig.postbackActions.disbandGroup}`, (payload, chat) => {
  sendDisbandGroup(chat, groups)
})

bot.on('postback', (payload, chat) => {
  const payloadParams = payload.postback.payload.split('/')

  if (payloadParams.length > 1) {
    switch (payloadParams[0]) {
      case botConfig.postbackActions.disbandGroupById: {
        postbackDisbandGroupById(chat, payloadParams[1])
        break
      }
    }
  }
})

bot.start(process.env.PORT ? parseInt(process.env.PORT) : 3000)
