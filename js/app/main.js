define(['jquery', 'underscore', 'bootstrap', 'problems', 'prism', 'text!templatePath/acordionTemplate.html'], function ($, _, bootstrap, euler, prism, acordionTemplate) {

	var arrFileNames = [];
	_.each(euler.info, function (prbl) {
		arrFileNames.push("js/app/problems/" + prbl.fileName + ".js");
	});

	require(arrFileNames, function () {
		$('#accordion').html(_.template(acordionTemplate, {
			euler: euler
		}));
		Prism.highlightAll();

		$('.btnRun button').on('click', function (e) {
			$('.btnRun button').prop('disabled', true);
			var node = e.currentTarget;
			var index = $(node).data('index');

			var modal = $("#runProgrModal");
			modal.find('.modal-header h4 span').html(euler.info[index].title);
			modal.find('.modal-body').html('<div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div>');
			modal.modal('show');

			setTimeout(function () {
				try {
					var fileName = euler.info[index].fileName;
					var functionName = euler.info[index].functionName;

					var tIni = Date.now();
					var sol = euler[fileName][functionName]();
					var tEnd = Date.now();

					var tTotal = tEnd - tIni;
					if (tTotal > 1000) {
						tTotal = (tTotal / 1000.0) + "seg";
					} else {
						tTotal = tTotal + "ms";
					}

					modal.find('.modal-body').html('<p>Solution: <strong>' + sol + '</strong></br>Time: <strong>' + tTotal + '</strong></p>');
				} catch (e) {
					// statements to handle any unspecified exceptions
					modal.find('.modal-body').html('<div class="alert alert-error"><p>Oups... this algorithm is shit. Sorry.</p></hr><p>' + e + '</p></div>');
				}

				$('.btnRun button').prop('disabled', false);
			}, 510);

		});

	});
});