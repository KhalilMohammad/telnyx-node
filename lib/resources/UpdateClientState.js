'use strict';

module.exports = require('../TelnyxResource').extend({
  path: '/client_state_update',
  includeBasic: ['update'],
});
