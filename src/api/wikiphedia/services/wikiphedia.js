'use strict';

/**
 * wikiphedia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wikiphedia.wikiphedia');
