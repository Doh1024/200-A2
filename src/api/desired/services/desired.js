'use strict';

/**
 * desired service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::desired.desired');
