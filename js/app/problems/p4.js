define(['jquery', 'underscore', 'bootstrap', 'problems'], function($, _, bootstrap, euler) {
	euler.p4 = {

		isPalindrome: function isPalindrome(n) {
			var num = n.toString();

			var esPalindromo = true;
			for (var i = 0, j = num.length;
				(i <= (j - 1)) && esPalindromo; i++, j--) {
				if (num[i] !== num[j - 1]) {
					esPalindromo = false;
				}
			}
			return esPalindromo;
		},

		largestPalindromeProduct: function largestPalindromeProduct(n) {
			var exp = n || 3;
			var limitMax = Math.pow(10, exp) - 1; // 999
			var limitMin = Math.pow(10, exp - 1); // 100
			var sol = {
				i: 0,
				j: 0,
				mul: 0
			};
			for (var i = limitMax; i > limitMin; i--) {
				for (var j = limitMax; j > limitMin; j--) {
					var mul = j * i;
					if (this.isPalindrome(mul) && (mul > sol.mul)) {
						sol.mul = mul;
						sol.i = i;
						sol.j = j;
					}
				}
			}
			return sol.i + " * " + sol.j + " = " + sol.mul;
		}
	};
});