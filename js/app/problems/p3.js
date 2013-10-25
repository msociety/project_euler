define(['problems'], function(euler) {

	euler.p3 = {

		getPrimes: function getPrimes(max) {
			var sieve = [];
			var i = [];
			var j = [];
			var primes = [];
			for (i = 2; i <= max; ++i) {
				if (!sieve[i]) {
					// i has not been marked -- it is prime
					primes.push(i);
					for (j = i << 1; j <= max; j += i) {
						sieve[j] = true;
					}
				}
			}
			return primes;
		},

		largestPrimeFactor: function largestPrimeFactor(n) {
			var num = n || 600851475143; // + 600851475143
			var primes = this.getPrimes(2000); //array[2,3,5,7,11,...]
			//descomponemos num en factores primos
			do {
				if (num % primes[0] !== 0) {
					primes.splice(0, 1); //elimina el primer elemnto del array
				} else {
					num = num / primes[0];
				}
			} while ((primes.length > 0) && (primes[0] <= num));

			return num;
		}
	};

});