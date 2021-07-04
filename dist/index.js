
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tutory-components.cjs.production.min.js')
} else {
  module.exports = require('./tutory-components.cjs.development.js')
}
