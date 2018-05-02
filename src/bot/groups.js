import botConfig from 'config/bot'

import { sendMainMenu } from './main'

export const sendGroupList = (chat, groups, postbackAction) => {
  chat.say({
    text: 'Your arisan groups:',
    buttons: groups.map(({ id, title }) => ({
      type: 'postback',
      title,
      payload: `${postbackAction}/${id}`,
    })),
  })
}

export const convoJoinGroup = chat => {
  chat.conversation(convo => {
    convo.ask('What\'s the name of the arisan group you would like to join?', (payload, convo) => {
      const groupName = payload.message.text
      // TODO: handle join group

      convo.say(`You have joined ${groupName}. All members of the group will be notified.`)

      convo.end()
      sendMainMenu(chat)
    })
  })
}

export const convoAssembleGroup = chat => {
  chat.conversation(convo => {
    convo.ask('What\'s the name of your arisan group?', (payload, convo) => {
      const groupName = payload.message.text
      // TODO: handle create group

      convo.say(`${groupName} has been assembled. You can now recruit your members.`)

      convo.end()
      sendMainMenu(chat)
    })
  })
}

export const sendDisbandGroup = (chat, groups) => {
  chat.say({
    text: 'Which arisan group do you want to disband? Your members will be notified when you disband this arisan group.',
    buttons: groups.map(({ id, title }) => ({
      type: 'postback',
      title,
      payload: `${botConfig.postbackActions.disbandGroupById}/${id}`,
    })),
  })
}

export const postbackDisbandGroupById = (chat, groupId) => {
  chat.conversation(convo => {
    convo.ask({
      text: 'Are you sure?',
      quickReplies: ['Yes', 'No'],
    }, (payload, convo) => {
      const confirmed = payload.message.text === 'Yes'

      if (confirmed) {
        // TODO: handle disband group by id
      }

      convo.end()
      sendMainMenu(chat)
    })
  })
}
