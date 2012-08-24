var first_player = {};
var second_player = {};
$(document).ready(function () {
    var props = [];

    $('#gallery img').draggable({
        revert:true
    });

    $("#left-player-image img").droppable({
        drop:function (event, ui) {
            var order = ui.draggable[0]['alt']-1;
            $('#left-player .label').text(cal_stars(props[order]));
            $(this).attr('src', ui.draggable[0]['src']);
            first_player = props[order];
        }
    });

    $("#right-player-image img").droppable({
        drop:function (event, ui) {
            var order = ui.draggable[0]['alt'] - 1;
            $('#right-player .label').text(cal_stars(props[order]));
            $(this).attr('src', ui.draggable[0]['src']);
            second_player = props[order];
        }
    });

    $("#refresh").click(function () {
        $('#listings-info table tbody tr').remove();
        props = getProp(6);
        for (var i = 0; i < 6; i++) {
            $('#listings-info table tbody').append('<tr><td>' +
                (i + 1) + '</td><td>' +
                props[i].property_type + '</td><td>' +
                props[i].state + '</td><td>' +
                props[i].street_name + '</td><td>' +
                props[i].suburb + '</td><td>' +
                props[i].landsize + '</td><td>' +
                props[i].bedrooms + '</td><td>' +
                props[i].bathrooms + '</td><td>' +
                '</td></tr>');
        }
    });

    $("#refresh").click();

//    $('#vs-message textarea').onkeyup(function(){
//        this.scrollTop = this.scrollHeight;
//    });

    $('#btn-fight').click(function () {
        $('#vs-content textarea').val("");
        fight_process(first_player, second_player);
    });
//
//    $('#vs-content textarea').change(function(){
//        this.scrollTop = this.scrollHeight;
//    })
});

