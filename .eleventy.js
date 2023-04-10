const moment = require("moment");
moment.locale("en");

module.exports = function (eleventyConfig) {
    // Date formatting
    // from: https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
    eleventyConfig.addFilter("dateIso", (date) => {
        return moment(date).toISOString();
    });

    // Date formatting
    // from: https://keepinguptodate.com/pages/2019/06/creating-blog-with-eleventy/
    eleventyConfig.addFilter("dateReadable", (date) => {
        return moment(date).utc().format("LL"); // E.g. May 31, 2019
    });

    // CSS Passthrough
    eleventyConfig.addPassthroughCopy("css");
    // Images Passthrough
    eleventyConfig.addPassthroughCopy("img");
    // Favicon Passthrough
    eleventyConfig.addPassthroughCopy({ ".favicon/": "." });
    // Fonts Passthrough
    eleventyConfig.addPassthroughCopy({ "fonts/": "fonts" });

    // add a filter for truncating strings
    eleventyConfig.addFilter("truncate", function (str, len) {
        if (str.length > len && str.length > 0) {
            var new_str = str + " ";
            new_str = str.substr(0, len);
            new_str = str.substr(0, new_str.lastIndexOf(" "));
            new_str = new_str.length > 0 ? new_str : str.substr(0, len);
            return new_str + "...";
        }
        return str;
    });

    // GitHub Flavored Markdown (GFM) library

    // return
    return {
        passthroughFileCopy: true,
    };
};
