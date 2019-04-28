if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/loader');
} else {
  module.exports = require('./dev-dist/loader.development');
}
