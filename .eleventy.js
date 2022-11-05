const moment = require('moment');
moment.locale('en');

module.exports = function(eleventyConfig) {
  // Date formatting
  // from: https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
  eleventyConfig.addFilter('dateIso', date => {
	return moment(date).toISOString();
  });

  // Date formatting
  // from: https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
  eleventyConfig.addFilter('dateReadable', date => {
	return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });

  // CSS Passthrough
  eleventyConfig.addPassthroughCopy('css')
  // Images Passthrough
  eleventyConfig.addPassthroughCopy('img')

  return {
	passthroughFileCopy: true
  }
};
