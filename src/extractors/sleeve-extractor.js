const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class SleeveExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'sleeve',
      corpus: new FileCorpus(`${__dirname}/../corpora/sleeve.txt`),
      options: {},
    });
  }
}

module.exports = SleeveExtractor;
