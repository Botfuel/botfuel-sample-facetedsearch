const {
  Bot, BotTextMessage, UserTextMessage, QuickrepliesMessage,
} = require('botfuel-dialog');
const config = require('../test-config');
// const Replay = require('replay');
describe('test bot scenario', () => {
  test('Bot return articles without asking unneccessary further question ', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([new UserTextMessage('I want to buy Levis jeans')]);
    expect(bot.adapter.log).toContainEqual(new BotTextMessage('Thank you. We have 2 products:').toJson(userId));
  });

  test('Bot proposes different size options ', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([new UserTextMessage('I want to buy a pull')]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('I want to buy a pull'),
      new BotTextMessage('What is your size?'),
      new QuickrepliesMessage(['S', 'M', 'L', 'XL', 'XXL']),
    ].map(o => o.toJson(userId)));
  });
});
