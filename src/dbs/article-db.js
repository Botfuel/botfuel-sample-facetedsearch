const { PlainFacetDb } = require('botfuel-module-facetedsearch');

const data = require('./data');

const colorMap = {
  FF0000: 'Red',
  FFFFFF: 'White',
};

const metaData = {
  filter: PlainFacetDb.DEFAULTFILTER({
    type: PlainFacetDb.EQUAL,
    brand: PlainFacetDb.EQUAL,
    color: (value, param) =>
      param &&
      colorMap[value] &&
      colorMap[value].toLowerCase() === param.toLowerCase(),
    size: PlainFacetDb.IN,
    sleeve: PlainFacetDb.EQUAL,
    form: PlainFacetDb.EQUAL,
  }),
  done: hits => hits && hits.length <= 2,
};

const ArticleDb = new PlainFacetDb(data, metaData);

module.exports = ArticleDb;
