const { getOptions } = require('loader-utils');
const validateOptions = require('schema-utils');

const schema = require('./options.json');

/**
 * @param {Buffer} source 
 */
module.exports = function binaryBase64Loader(source) {
  const options = getOptions(this);

  validateOptions(schema, options, {
    name: 'Binary Base64 Loader',
    baseDataPath: 'options',
  });

  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true;

  return `${esModule ? 'export default' : 'module.exports ='} ${JSON.stringify(
    source.toString('base64')
  )};`;
};

module.exports.raw = true;
