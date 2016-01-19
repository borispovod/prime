# Get primes
[![Build Status](https://travis-ci.org/crypti/prime.svg?branch=master)](https://travis-ci.org/crypti/prime)

Finds any prime numbers up to given limit. Based on linear Sieve of Eratosthenes algo.

## Simple to use

Install: 

```
npm install get-primes
```

And use:

```js
var prime = require('get-primes');

var primeNumbers = prime(10);
console.log(primeNumbers);
```

## Run tests

```
npm test
```

## Benchmarks

2,2 GHz Intel Core i7, 16 GB RAM

```
Get prime numbers before 10 x 547,703 ops/sec ±1.31% (76 runs sampled)
Get prime numbers before 100 x 84,012 ops/sec ±3.06% (74 runs sampled)
Get prime numbers before 1000 x 9,133 ops/sec ±1.21% (72 runs sampled)
Get prime numbers before 10000 x 905 ops/sec ±1.47% (74 runs sampled)
Get prime numbers before 100000 x 97.17 ops/sec ±1.51% (62 runs sampled)
Get prime numbers before 1000000 x 4.00 ops/sec ±14.54% (14 runs sampled)
Get prime numbers before 10000000 x 0.37 ops/sec ±7.17% (5 runs sampled)
```

To run benchmarks:

```
npm run-script benchmark
```

## License 

MIT