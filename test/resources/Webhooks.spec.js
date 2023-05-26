'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Webhook Deliveries', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.webhooks.retrieve({id: TEST_UUID}).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.webhooks
        .retrieve({id: TEST_UUID}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.webhooks.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.webhooks.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
