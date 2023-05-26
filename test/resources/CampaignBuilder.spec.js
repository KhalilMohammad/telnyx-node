'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Campaign Builder', function () {
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('brandId');
      expect(response).to.have.property('description');
      expect(response).to.have.property('usecase');
      expect(response).to.have.property('vertical');
    }
    it('Sends the correct request', function () {
      return telnyx.campaign
        .create({
          brandId: 'string',
          description: 'string',
          usecase: 'string',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .create(
          {
            brandId: 'string',
            description: 'string',
            usecase: 'string',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveQualifyByUsecase', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }
    it('Sends the correct request', function () {
      return telnyx.campaign.retrieveQualifyByUsecase({}).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.campaign
        .retrieveQualifyByUsecase({}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
