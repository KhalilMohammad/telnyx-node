'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('numberPortoutsSupportingDocuments', function () {
  describe('retrieveGenerateJoinClientToken', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomClientToken
        .retrieveGenerateJoinClientToken({
          room_id: utils.getTestRoomId(),
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.retrieveGenerateJoinClientToken
        .retrieveGenerateJoinClientToken(
          {
            room_id: utils.getTestRoomId(),
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrieveRefreshClientToken', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomClientToken
        .retrieveRefreshClientToken({
          room_id: utils.getTestRoomId(),
          refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomClientToken
        .retrieveRefreshClientToken(
          {
            room_id: utils.getTestRoomId(),
            refresh_token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
