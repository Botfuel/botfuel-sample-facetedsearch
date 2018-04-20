const { View, BotTextMessage } = require('botfuel-dialog');

class GreetingsView extends View {
  render(userMessage, data ) {
    const { greeted } = data;
    if (greeted) {
      return [new BotTextMessage('Hi again!')];
    }
    return [new BotTextMessage('Hello!')];
  }
}

module.exports = GreetingsView;
