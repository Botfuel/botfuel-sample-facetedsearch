const { TextView } = require('botfuel-dialog');

class GreetingsView extends TextView {
  getTexts(userMessage, { extraData }) {
    if (extraData.greeted) {
      return ['Hi again!'];
    }
    return ['Hello!'];
  }
}

module.exports = GreetingsView;
