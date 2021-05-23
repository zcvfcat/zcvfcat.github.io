const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
})
