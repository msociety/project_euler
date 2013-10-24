define(['jquery', 'underscore', 'bootstrap', 'problems'], function($, _, bootstrap, euler) {

	euler.p6 = {
		sumSquareDifference: function sumSquareDifference(n) {
			var num = n || 100;
			var sumOfSquares = 0;
			var squareOfSums = 0;
			for (var i = 1; i <= num; i++) {
				sumOfSquares += Math.pow(i, 2);
				squareOfSums += i;
			}
			squareOfSums = Math.pow(squareOfSums, 2);
			return squareOfSums - sumOfSquares;
		}
	};

});