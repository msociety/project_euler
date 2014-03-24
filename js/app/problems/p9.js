define(['problems'], function (euler) {

	euler.p9 = {
		pythagoreanTriplet: function pythagoreanTriplet() {
			var found = false;
			var SUM = 1000;
			for (var a = 1; a <= SUM / 3 && !found; a++) {
				for (var b = a + 1; b <= SUM / 2 && !found; b++) {
					var c = SUM - a - b;
					if (c > 0 && (a * a + b * b == c * c)) {
						console.log("a=" + a + " b=" + b + "c=" + c);
						found = true;
					}
				}
			}
			return "a=" + a + ", b=" + b + ", c=" + c;
		}
	};

});