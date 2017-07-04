'use strict'

var supertest = require('supertest');
app = require('../app');

exports.test_architecture_route = function(done) {
   supertest(app)
      .get('/architecture')
      .expect(200)
      .end(function(err, response) {
         assert.ok(!err);
         assert.ok(response.body.data.title === 'Common Architectures');
      });
};