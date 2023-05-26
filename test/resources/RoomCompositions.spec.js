'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Access IP Ranges Resource', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomCompositions
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            session_id: '92e7d459-bcc5-4386-9f5f-6dd14a82588d',
            status: 'completed',
          },
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              session_id: '92e7d459-bcc5-4386-9f5f-6dd14a82588d',
              status: 'completed',
            },
            page: {
              size: '20',
              number: '1',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomCompositions.create().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions.create(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }

    it('Sends the correct request', function () {
      return telnyx.roomCompositions.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomCompositions.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
