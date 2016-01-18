var assert = require('assert'),
	prime = require('../index.js'),
	fs = require('fs'),
	path = require('path');

describe('Prime', function() {
  describe('Get and verify prime numbers based on prepared prime numbers list', function () {
	 var primes = [],
		 result = [];

	 before(function (next) {
		fs.readFile(path.normalize('./test/primes.txt'), 'utf8', function (err, text) {
		  assert.equal(err, null);
		  primes = text.split(' ').map(function (i) { return parseInt(i); });

		  next();
		});
	 });

	 it("should get correct data for all prime numbers", function () {
		primes.forEach(function (it, i) {
		  var data = prime(it);
		  result.push(it);

		  assert.deepEqual(data, result);
		});
	 });
  });
});