/**
 *
 * Home
 *
 */
var serviciosTpl = "";


$(function() {
	$.get("partials/_servicios.html").then(function(tpl) {
		serviciosTpl = tpl;
		var template = Handlebars.compile(serviciosTpl);

		$("#renderServicios").html(template);
	});
});
