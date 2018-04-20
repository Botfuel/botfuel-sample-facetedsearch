const { BaseDialog, Logger } = require('botfuel-dialog');

const logger = Logger('Greetings');

class Greetings extends BaseDialog {
  async dialogWillDisplay(userMessage) {
    logger.debug('Greetings dialog being called');
    const userId = userMessage.user;
    const { greeted } = (await this.brain.userGet(userId, 'greetings')) || {
      greeted: false,
    };

    if (!greeted) {
      await this.brain.userSet(userId, 'greetings', { greeted: true });
    }

    return { greeted };
  }

  async dialogWillComplete() {
    return this.startNewConversation();
  }
}

module.exports = Greetings;
