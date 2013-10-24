define(['jquery', 'underscore', 'bootstrap', 'problems'], function($, _, bootstrap, euler) {
	euler.p7 = {

		getFirstNPrimes: function getFirstNPrimes(n) {
			var max = n * 100; // a very ugly estimation
			var sieve = [];
			var i = [];
			var j = [];
			var primes = [];
			var finded = false;
			for (i = 2; !finded && (j <= max); ++i) {
				if (!sieve[i]) {
					// i has not been marked -- it is prime
					primes.push(i);
					for (j = i << 1; j <= max; j += i) {
						sieve[j] = true;
					}
					if (primes.length >= n) {
						finded = true;
					}
				}
			}
			return primes;
		},

		prime10001st: function prime10001st(n) {
			var num = n || 10001;
			var primes = this.getFirstNPrimes(num);
			return primes[primes.length - 1];
		}
	};
});