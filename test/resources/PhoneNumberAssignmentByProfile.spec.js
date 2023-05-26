'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;
var TEST_AUTH_KEY = utils.getUserTelnyxKey();
describe('Get Assignment Task Status', function () {
  describe('retrieveTaskStatus', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('messagingProfileId');
      expect(response.data).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .retrieveTaskStatus({
          messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .retrieveTaskStatus(
          {
            messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('retrievePhoneNumberStatus', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('records');
      expect(response.data.records).to.be.an('array');
      expect(response.data.records[0]).to.have.property('phoneNumber');
      expect(response.data.records[0]).to.have.property('status');
      expect(response.data.records[0]).to.have.property('taskId');
    }

    it('should assign phone number by profile', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .retrievePhoneNumberStatus({taskId: 'taskId'})
        .then(responseFn);
    });

    it('should assign phone number by profile [with specified auth]', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .retrievePhoneNumberStatus({taskId: 'taskId'}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('create', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('messagingProfileId');
      expect(response.data).to.have.property('taskId');
    }

    it('Sends the correct request', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .create({
          messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.phoneNumberAssignmentByProfile
        .create(
          {
            messagingProfileId: '4001767e-ce0f-4cae-9d5f-0d5e636e7809',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
});
