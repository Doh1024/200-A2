'use strict';

/**
 * desired router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::desired.desired');
