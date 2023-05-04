'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Access IP Addresses Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('created_at');
      expect(response.data).to.have.property('description');
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('ip_address');
      expect(response.data).to.have.property('source');
      expect(response.data).to.have.property('status');
      expect(response.data).to.have.property('updated_at');
      expect(response.data).to.have.property('user_id');
    }

    it('Sends the correct request', function () {
      return telnyx.accessIpAddress.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.accessIpAddress.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('ip_source');
      expect(response.data[0]).to.have.property('ip_address');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('created_at');
      expect(response.data[0]).to.have.property('created_at');
      expect(response.data[0]).to.have.property('number');
      expect(response.data[0]).to.have.property('size');
    }

    it('Sends the correct request', function () {
      return telnyx.addresses.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.addresses.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
