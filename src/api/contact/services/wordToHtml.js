const fs = require('fs');
const mammoth = require('mammoth');

module.exports = {
  async convertWordToHtml(filePath) {
    try {
      const data = fs.readFileSync(filePath);
      const result = await mammoth.convertToHtml({ buffer: data });
      return result.value; // Clean HTML
    } catch (error) {
      console.error("Error converting Word to HTML:", error);
      throw error;
    }
  },
};
