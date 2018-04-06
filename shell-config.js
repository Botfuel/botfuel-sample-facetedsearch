module.exports = {
  locale: 'en',
  adapter: {
    name: 'shell',
  },
  brain: {
    name: 'memory',
  },
  logger: 'custom-logger',
  modules: ['botfuel-module-facetedsearch'],
  path: __dirname,
};
