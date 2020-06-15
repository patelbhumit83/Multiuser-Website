const app = require('../tourServer'); // Import server
var assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');


describe('Get Tour Tests', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours');
	})
	it('Everything is OK', async function(){
		assert.equal(response.status, 200);
	});
	it('Returns an array', function(){
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function(){
		tours.forEach(function(tour){
			assert.containsAllKeys(tour, ['name', 'date']);
		});
	});
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('nt2955'));
		assert.notEmpty(mycookie);
	});
})

describe('Get an Individual tour', function(){
	var response;
	var tours=null;

	before(async function(){
		response1 = await request(app).get('/tours/6POfI81o6jCYfPc');
		response1 = await request(app).get('/tours/7z5bzV3cRdsbm6LO');
		response1 = await request(app).get('/tours/nonExistingTourId12345');

	})

		it(`Get an existing tour`, function(){
			console.log(`Trying Path :- /tours/${tourid1}`);
			assert.equal(response1.status, 200);
			var tr = tours.filter(function(tour){return tour._id == tourid1;});
			assert.notEmpty(tr);
			assert.containsAllKeys(tr[0], ['name','date'])
		})


		it('Get an another existing tour', function(){
				console.log(`Trying Path :- /tours/${tourid2}`);
				assert.equal(response2.status, 200);
				var tr = tours.filter(function(tour){return tour._id == tourid2;});
			assert.notEmpty(tr);
			assert.containsAllKeys(tr[0], ['name','date'])
		})

		it('Try getting non existing tour', function(){
			console.log(`Trying Path :- /tours/${tourid3}`);
			var tr = tours.filter(function(tour){return tour._id == tourid3;});
			assert.empty(tr);
		})

})
