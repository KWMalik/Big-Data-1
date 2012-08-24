$(document).ready(function () {



    $('#gallery img').draggable({
        revert:true
    });
    $("#fight img").droppable({
        drop:function (event, ui) {
            $(this).attr('src', ui.draggable[0]['src']);
        }
    });

    $("#refresh").click(function() {
        $('#listings-info table').remove();
        $('#listings-info table tr:last').after('<tr><td>2222</td><td>TB - Monthly</td><td>01/04/2012</td><td>Approved</td></tr>');
    });

//    $('#vs-message textarea').onkeyup(function(){
//        this.scrollTop = this.scrollHeight;
//    });

    $('#btn-fight').click(function(){
        fight_process();
    });
});

