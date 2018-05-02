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

export const convoDisbandGroup = (chat, groups) => {
  chat.conversation(convo => {
    convo.ask({
      text: 'Which arisan group do you want to disband? Your members will be notified when you disband this arisan group.',
      buttons: groups.map(({ id, title }) => ({
        type: 'postback',
        title,
        payload: id,
      })),
    }, (payload, convo) => {
      const groupdId = payload.message.text
      convo.set('groupId', groupdId)

      convo.ask({
        text: 'Are you sure?',
        buttons: [
          {
            type: 'postback',
            title: 'Yes',
            payload: 'yes',
          },
          {
            type: 'postback',
            title: 'Cancel',
            payload: 'cancel',
          },
        ],
      }, (payload, convo) => {
        const confirmed = payload.message.text === 'yes'

        if (confirmed) {
          // TODO: handle disband group by id
        }

        convo.end()
        sendMainMenu(chat)
      })
    })
  })
}
