var Benchmark = require('benchmark'),
	primes = require('../index.js');

var suite = new Benchmark.Suite;
var base = 1;

for (var i = 1; i <= 7; i++) {
  base *= 10;
  suite.add("Get prime numbers before " + base, (function (base) {
	 return function () {
		primes(base);
	 }
  })(base));
}

suite
	.on('cycle', function(event) {
	  console.log(String(event.target));
	}).on('complete', function() {
	  console.log('Done');
	}).run();