'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, '/documents', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/documents',
      urlParams: ['documentsId'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    update: telnyxMethod({
      method: 'PATCH',
      path: '/documents',
      urlParams: ['documentsId'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: '/documents',
  list: telnyxMethod({
    method: 'GET',
    transformResponseData: transformResponseData,
  }),
  update: telnyxMethod({
    method: 'PATCH',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  del: telnyxMethod({
    method: 'DELETE',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
  upload: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieveDocumentId: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
  retrieveDownloadDocument: telnyxMethod({
    method: 'GET',
    path: '/{id}/download',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
