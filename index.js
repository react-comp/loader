if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/loadings.production.min');
} else {
  module.exports = require('./dist/loadings.development');
}
