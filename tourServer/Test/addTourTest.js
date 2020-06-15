const initialize = require('../tourDBintialize.js')
const app = require('../tourServer'); // Import server
var assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');

describe('Add Tour Test', function(){
  var response = null;
  var addresult = null;
  var agent = request.agent(app);

  before(function(){
    initialize;
  })

    it('Login as Admin add tour', async function(){
      var admin = await agent.post('/login').send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
      assert.equal(admin.status, 200);
      var add = await agent.post('/tours/add').send({"name": "Windsurf K2-18b, 110 Light Years",
      "date": "Sometime in 2025",
      "type": "virtual_tour"});
      assert.equal(add.status, 200);
    });

    it('Login as Customer add tour', async function(){
      var cust = await agent.post('/login').send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
      assert.equal(cust.status, 200);
      var add = await agent.post('/tours/add').send({"name": "Windsurf K2-18b, 110 Light Years",
      "date": "Sometime in 2025",
      "type": "virtual_tour"});
      assert.equal(add.status, 401);
    })

    it('Guest trying to add tour', async function(){
      var add = await agent.post('/tours/add').send({"name": "Windsurf K2-18b, 110 Light Years",
      "date": "Sometime in 2025",
      "type": "virtual_tour"});
      assert.equal(add.status, 401);
    })

})
