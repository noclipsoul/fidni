const wordToHtmlService = require('../services/wordToHtml');

module.exports = {
  async uploadAndConvert(ctx) {
    try {
      const { files } = ctx.request.files;
      const htmlContent = await wordToHtmlService.convertWordToHtml(files[0].path);

      // Save HTML content to Strapi (e.g., to the Article collection)
      const article = await strapi.services.article.create({
        title: files[0].name,
        content: htmlContent,
      });

      ctx.send({ message: "Article created successfully!", article });
    } catch (error) {
      ctx.throw(500, "Failed to process the Word document.");
    }
  },
};
