module.exports = {
  adapter: {
    name: 'botfuel',
  },
  logger: 'info',
  brain: {
    name: 'memory',
  },
  modules: ['botfuel-module-facetedsearch'],
  path: __dirname,
};
