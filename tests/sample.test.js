const {
  Bot, BotTextMessage, UserTextMessage, QuickrepliesMessage,
} = require('botfuel-dialog');
const config = require('../test-config');
// const Replay = require('replay');
describe('test bot scenario', () => {
  test('Bot return articles without asking unneccessary further question ', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([new UserTextMessage('I want to buy some Levis jeans')]);
    expect(bot.adapter.log).toContainEqual(new BotTextMessage('Thank you. We have 2 products:').toJson(userId));
  });

  test('Bot proposes different size options ', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([new UserTextMessage('I want to buy a polo')]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('I want to buy a polo'),
      new BotTextMessage('What is your size?'),
      new QuickrepliesMessage(['S', 'M', 'L', 'XL', 'XXL']),
    ].map(o => o.toJson(userId)));
  });

  test('Bot returns no result if user does not answer within proposed choices.', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('I want to buy a Lacoste polo of size M'),
      new UserTextMessage('Blue'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('I want to buy a Lacoste polo of size M'),
      new BotTextMessage('What color do you like?'),
      new QuickrepliesMessage(['Red', 'White']),
      new UserTextMessage('Blue'),
      new BotTextMessage("Sorry we don't find any result!"),
    ].map(o => o.toJson(userId)));
  });

  test('Bot should start new conversation on hello', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('I want to buy a Lacoste polo of size M'),
      new UserTextMessage('Blue'),
      new UserTextMessage('Hello'),
      new UserTextMessage('I want to buy a Lacoste polo'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('I want to buy a Lacoste polo of size M'),
      new BotTextMessage('What color do you like?'),
      new QuickrepliesMessage(['Red', 'White']),
      new UserTextMessage('Blue'),
      new BotTextMessage("Sorry we don't find any result!"),
      new UserTextMessage('Hello'),
      new BotTextMessage('Hello!'),
      new UserTextMessage('I want to buy a Lacoste polo'),
      new BotTextMessage('What is your size?'),
      new QuickrepliesMessage(['S', 'M', 'L', 'XL', 'XXL']),
    ].map(o => o.toJson(userId)));
  });
});
