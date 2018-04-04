const { TextDialog, Logger } = require('botfuel-dialog');

const logger = Logger('Greetings');

class Greetings extends TextDialog {
  async dialogWillDisplay(userMessage) {
    logger.debug('Greetings dialog being called');
    const userId = userMessage.user;
    const greetings = (await this.brain.userGet(userId, 'greetings')) || {
      greeted: false,
    };
    return greetings;
  }

  async dialogWillComplete(userMessage) {
    const userId = userMessage.user;
    const greetings = (await this.brain.userGet(userId, 'greetings')) || {
      greeted: false,
    };
    if (greetings.greeted) {
      return this.startNewConversation();
    }

    await this.brain.userSet(userId, 'greetings', { greeted: true });
    return null;
  }
}

module.exports = Greetings;
