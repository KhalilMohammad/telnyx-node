'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('numberPortoutsSupportingDocuments', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }

    it('Sends the correct request', function () {
      return telnyx.rooms
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_updated_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            unique_name: 'my_video_room',
          },
          include_sessions: 'true',
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_updated_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              unique_name: 'my_video_room',
            },
            include_sessions: 'true',
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
      return telnyx.rooms
        .create({
          data: {
            connection_id: 'c-1',
            created_at: '2020-05-05T09:59:12',
            direction: 'outbound',
            from: '+123',
            id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            media_url: 'http://www.example.com/fax.pdf',
            quality: 'high',
            record_type: 'fax',
            status: 'queued',
            store_media: true,
            stored_media_url:
              'https://s3.amazonaws.com/faxes-dev/user-1/cf4a6b52-bf8e-4945-9f49-611d0d2b083b.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=xxxxxxxxxx%2F20200505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200505T095917Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=fac2af40464fcc77673ad762db86e34f9c1b91a82699b5578c5327f53874df51',
            to: '+456',
            updated_at: '2020-05-05T09:59:12',
            webhook_failover_url: '',
            webhook_url: 'http://www.example.com/webhooks',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .create(
          {
            data: {
              connection_id: 'c-1',
              created_at: '2020-05-05T09:59:12',
              direction: 'outbound',
              from: '+123',
              id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
              media_url: 'http://www.example.com/fax.pdf',
              quality: 'high',
              record_type: 'fax',
              status: 'queued',
              store_media: true,
              stored_media_url:
                'https://s3.amazonaws.com/faxes-dev/user-1/cf4a6b52-bf8e-4945-9f49-611d0d2b083b.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=xxxxxxxxxx%2F20200505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200505T095917Z&X-Amz-Expires=7200&X-Amz-SignedHeaders=host&X-Amz-Signature=fac2af40464fcc77673ad762db86e34f9c1b91a82699b5578c5327f53874df51',
              to: '+456',
              updated_at: '2020-05-05T09:59:12',
              webhook_failover_url: '',
              webhook_url: 'http://www.example.com/webhooks',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property();
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.del(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.retrieve(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
  describe('cancel', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.cancel(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.cancel(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
  describe('refresh', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.refresh(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.refresh(TEST_UUID, TEST_AUTH_KEY).then(responseFn);
    });
  });
});
