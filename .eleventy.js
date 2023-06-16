/* const Card = require('./src/_includes/components/Card')
 */
module.exports = function (eleventyConfig) {
  /* Always allow in the public folder */
  eleventyConfig.addPassthroughCopy('./src/css')
  eleventyConfig.addPassthroughCopy('./src/assets/')
  eleventyConfig.addPassthroughCopy('./src/pages/')
  /* Watch for updates */
  eleventyConfig.addWatchTarget('./src/css')
  eleventyConfig.addWatchTarget('./src/pages')

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'public',
    },
    templateFormats: ['md', 'njk', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  }
}
