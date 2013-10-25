define(['problems'], function(euler) {

	euler.p2 = {

		evenFibonacciNumbers: function evenFibonacciNumbers(lim) {
			var limit = lim || 4000000;
			var before = 1;
			var current = 2;
			var next = 0;
			var sol = current;

			do {
				next = before + current;
				if (next % 2 === 0) {
					sol += next;
				}
				before = current;
				current = next;
			} while (next < limit);

			return sol;
		}
	};

});