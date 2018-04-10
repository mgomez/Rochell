/**
 *
 * Rochell @zkar13
 *
 */

$(function() {
    AOS.init();

    //formulario de contacto
    $("#frm-contacto").on("submit", function() {
            return false
        })
        .validate();
});
