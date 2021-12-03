'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('Fqdns Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('connection_id');
    expect(response.data).to.have.property('fqdn');
    expect(response.data).to.have.property('record_type');
    expect(response.data).to.include({record_type: 'fqdn'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.fqdns.retrieve('123').then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com', dns_record_type: 'a'})
        .then(responseFn);
    })

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com', dns_record_type: 'a'}, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function() {
      return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com', dns_record_type: 'a'}, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function() {
    function listResponseFn(response) {
      return responseFn({data: response.data[0]});
    }

    it('Sends the correct request', function() {
      return telnyx.fqdns.list()
        .then(listResponseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.fqdns.list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('Nested', function() {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('connection_id');
        expect(response.data).to.have.property('fqdn');
        expect(response.data).to.include({record_type: 'fqdn'});
      }
    }

    describe('del', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com', dns_record_type: 'a'})
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.del()
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdns.retrieve('123')
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.del(TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });

    describe('update', function() {
      it('Sends the correct request', function() {
        return telnyx.fqdns.create({connection_id: 'Central BSD-1', fqdn: 'example.com', dns_record_type: 'a'})
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.update({connection_id: 'Western BSD-2'})
              .then(responseFn);
          })
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.fqdns.retrieve('123')
          .then(function(response) {
            const fqdn = response.data;
            return fqdn.update({connection_id: 'Western BSD-2'}, TEST_AUTH_KEY)
              .then(responseFn);
          })
      });
    });
  })
});
