/**
 *
 * Rochell @zkar13
 *
 */

$(function() {
	AOS.init();
	//servicios
	$(document).on("click", ".Servicios-item", function() {
		var view = $(this).data("view");

		window.location = view + ".html";
	});
	//formulario de contacto
	$("#frm-contacto").on("submit", function() {
			return false
		})
		.validate();
});
