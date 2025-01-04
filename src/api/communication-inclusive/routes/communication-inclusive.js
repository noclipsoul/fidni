'use strict';

/**
 * communication-inclusive router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::communication-inclusive.communication-inclusive');
