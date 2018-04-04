module.exports = {
  adapter: {
    name: 'messenger',
  },
  logger: 'custom-logger',
  brain: {
    name: 'memory',
  },
  modules: ['botfuel-module-facetedsearch'],
  path: __dirname,
};
