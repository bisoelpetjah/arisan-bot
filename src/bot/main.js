import botConfig from 'config/bot'

export const sendMainMenu = chat => {
  chat.say({
    text: 'What can I help?',
    buttons: [
      {
        type: 'postback',
        title: 'My arisan groups',
        payload: botConfig.postbackActions.listGroup,
      },
      {
        type: 'postback',
        title: 'Join arisan groups',
        payload: botConfig.postbackActions.joinGroup,
      },
      {
        type: 'postback',
        title: 'Assemble new arisan group',
        payload: botConfig.postbackActions.assembleGroup,
      },
      {
        type: 'postback',
        title: 'Disband my arisan group',
        payload: botConfig.postbackActions.disbandGroup,
      },
    ],
  })
}
