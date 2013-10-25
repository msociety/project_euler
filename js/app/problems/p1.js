define(['problems'], function(euler) {

	euler.p1 = {

		multiplesOf3And5: function multiplesOf3And5() {
			var sol = 0;
			for (var i = 0; i < 1000; i++) {
				if ((i % 3 === 0) || (i % 5 === 0)) {
					sol += i;
				}
			}
			return sol;
		}

	};

});