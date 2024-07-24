'use strict';

/**
 * post-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-blog.post-blog');
