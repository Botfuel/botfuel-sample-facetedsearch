const { SearchDialog } = require('botfuel-module-facetedsearch');
const ArticleDb = require('../dbs/article-db');

class ArticleDialog extends SearchDialog {}

ArticleDialog.params = {
  namespace: 'article',
  db: ArticleDb,
  entities: {
    type: {
      dim: 'type',
      priority: 10,
    },
    brand: {
      dim: 'brand',
    },
    size: {
      dim: 'size',
      priority: 5,
    },
    sleave: {
      dim: 'sleave',
    },
    color: {
      dim: 'color',
    },
    form: {
      dim: 'form',
    },
  },
};

module.exports = ArticleDialog;
