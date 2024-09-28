'use strict';

module.exports = {
  async sendEmail(ctx) {
    const { from, to, subject, text } = ctx.request.body;

    // Send email using Strapi's email service
    await strapi.plugin('email').service('email').send({
      to,
      from: from || 'support@fidni.tn',
      subject,
      text,
    });

    ctx.send({ message: 'Email sent successfully' });
  },
};
