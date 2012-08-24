$(document).ready(function () {

    var first_player = {};
    var second_player = {};

    var prop3 = {
        "_id":{
            "$oid":"5035cc8c51573d350ed9c328"
        },
        "id":1422983,
        "unit_number":2,
        "street_number_low":11,
        "street_number_high":"",
        "street_name":"BEACONSFIELD",
        "street_type":"STREET",
        "street_direction":"",
        "suburb":"BEXLEY",
        "state":"NSW",
        "postcode":2207,
        "property_type":"UNIT",
        "bedrooms":3,
        "bathrooms":2,
        "landsize":1213,
        "latitude":-33.95453139,
        "longitude":151.12111775,
        "last_sale_price_range_low":450001,
        "last_sale_price_range_high":500000,
        "last_sale_year_month":200909,
        "last_sale_method":"Normal Sale",
        "last_sale_agency_name":"",
        "last_sale_agency_id":"A",
        "listing_ids":104608123,
        "valuation_range_low":375001,
        "valuation_range_high":500000
    };

    $('#gallery img').draggable({
        revert:true
    });
    var getNum = function(src){

    };
    $("#fight img").droppable({
        drop:function (event, ui) {
            $(this).attr('src', ui.draggable[0]['src']);
            console.log(ui.draggable);
        }
    });

    $("#refresh").click(function () {
        $('#listings-info table tbody tr').remove();
        for (var i = 1; i <= 6; i++) {
            $('#listings-info table tbody').append('<tr><td>' +
                i + '</td><td>' +
                prop3.property_type + '</td><td>' +
                prop3.state + '</td><td>' +
                prop3.street_name + '</td><td>' +
                prop3.suburb + '</td><td>' +
                prop3.landsize + '</td><td>' +
                prop3.bedrooms + '</td><td>' +
                prop3.bathrooms + '</td><td>' +
                '</td></tr>');
        }
    });

//    $('#vs-message textarea').onkeyup(function(){
//        this.scrollTop = this.scrollHeight;
//    });

    $('#btn-fight').click(function () {
        fight_process();
    });
});

