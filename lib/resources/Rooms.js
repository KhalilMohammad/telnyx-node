'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'rooms', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/rooms',
      urlParams: ['rooms'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/rooms',
      urlParams: ['rooms'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'rooms',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  del: telnyxMethod({
    method: 'DELETE',
    transformResponseData: transformResponseData,
  }),
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{room_id}',
    urlParams: ['room_id'],

    transformResponseData: transformResponseData,
  }),
  update: telnyxMethod({
    method: 'PATCH',
    path: '/{room_id}',
    urlParams: ['room_id'],

    transformResponseData: transformResponseData,
  }),
  listOfRoomSessions: telnyxMethod({
    method: 'GET',
    path: '/{room_id}/sessions',
    urlParams: ['room_id'],

    transformResponseData: transformResponseData,
  }),
});
