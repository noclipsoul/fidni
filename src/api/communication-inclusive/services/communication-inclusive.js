'use strict';

/**
 * communication-inclusive service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::communication-inclusive.communication-inclusive');
