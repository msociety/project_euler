define(['jquery', 'underscore', 'bootstrap', 'problems'], function($, _, bootstrap, euler) {
	euler.p5 = {

		/*
		// This function only runs fine with n smaller than 16 or 17
		smallestMultiple: function smallestMultiple(n, c, lim) {
			if (n <= 1) {
				return lim;
			} else {
				var baseNum = n || 10;
				var baseCounter = c || 2;
				var limit = lim || baseNum * baseCounter;
				var finded = false;
				var exit = false;
				do {
					if (baseNum * baseCounter === limit) {
						finded = this.smallestMultiple(baseNum - 1, baseCounter + 1, limit);
					}
					baseCounter++;
					if (baseNum * baseCounter > limit) {
						if (n !== undefined) {
							exit = true;
						} else {
							limit = baseNum * baseCounter;
						}
					}
				} while ((finded === false) && !exit);

				return finded;
			}
		},
		*/

		smallestMultiple: function smallestMultiple(n) {
			var num = n || 20;
			var primes = this.getPrimes(num);

			// Decomposition of prime factors for all numbers from 1 to n
			// var primeFactors = [[2],[3],[2, 2],[5],[2, 3],[7],[2, 2, 2],[3, 3],[2, 5],[11],[2, 2, 3],[13],[2, 7],[3, 5],[2, 2, 2, 2],[17],[2, 3, 3],[19],[2, 2, 5]];
			var primeFactors = [];
			var i = null;
			var j = null;
			var sol = 1;
			for (i = 2; i <= num; i++) {
				primeFactors.push(this.primeFactorDecomposition(i, primes.slice(0)));
			}

			// select "common" and "no common" factors with "max exponent"
			// var arrMaxExp = [[2, 2, 2, 2],[3, 3],[5],[7],[11],[13],[17],[19]];
			var arrMaxExp = [];
			var posArr = -1;
			var posSubArr = -1;
			var currentPrime = 0
			for (i = 0; i < primeFactors.length; i++) {
				for (j = 0; j < primeFactors[i].length; j++) {
					if (currentPrime < primeFactors[i][j]) {
						currentPrime = primeFactors[i][j];
						posArr = this.posInArray2D(arrMaxExp, currentPrime);
						posSubArr = 0;
					}
					if (posArr < 0) {
						posArr = arrMaxExp.length;
						arrMaxExp[posArr] = [currentPrime];
					} else {
						arrMaxExp[posArr][posSubArr] = currentPrime;
					}
					posSubArr++;
				}
				currentPrime = 0;
				posSubArr = 0;
			}

			// and multiply all numbers
			for (i = 0; i < arrMaxExp.length; i++) {
				for (j = 0; j < arrMaxExp[i].length; j++) {
					sol = sol * arrMaxExp[i][j];
				}
			}

			return sol;
		},

		primeFactorDecomposition: function primeFactorDecomposition(n, pri) {
			var num = n;
			var sol = [];
			var c = 0;
			var primes = pri || this.getPrimes(num); //array[2,3,5,7,11,...]

			do {

				if (num % primes[0] !== 0) {
					primes.splice(0, 1); //elimina el primer elemnto del array
				} else {
					sol[c] = primes[0];
					c++;
					num = num / primes[0];
				}
			} while (primes[0] <= num);

			return sol;
		},

		posInArray2D: function posInArray2D(arr, elem) {
			for (var i = 0; i < arr.length; i++) {
				if ((arr[i].length > 0) && (arr[i][0] === elem)) {
					return i;
				}
			}
			return -1;
		},

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
		}
	}
});