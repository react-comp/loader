if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/loader.production.min');
} else {
  module.exports = require('./dist/loader.development');
}
