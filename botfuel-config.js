module.exports = {
  adapter: {
    name: 'botfuel',
  },
  logger: 'custom-logger',
  brain: {
    name: 'memory',
  },
  modules: ['botfuel-module-facetedsearch'],
  path: __dirname,
};
