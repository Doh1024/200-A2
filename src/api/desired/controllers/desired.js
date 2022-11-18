'use strict';

/**
 * desired controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::desired.desired');
