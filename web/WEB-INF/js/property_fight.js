/**
 * Created with JetBrains RubyMine.
 * User: twer
 * Date: 8/23/12
 * Time: 9:43 PM
 * To change this template use File | Settings | File Templates.
 */

function getProp(num){
    $.ajax({
        url:  'http://10.18.10.20:28017/bigdata/rpdata/',
        data: {limit:num},
        complete:  function(a,b,c){
            alert(a);
            alert(b);
            alert(c);
        },
        type: 'GET',
        dataType: 'jsonp'
    });
    return false;
}

function cal_stars(prop) {
    var star = Math.round(prop.last_sale_price_range_high / 1000000) + 1;
    return star
}

function fight_process() {
    fight(prop1, prop2);
}

function fight(prop1, prop2) {
    var num1, num2, damage = 0, double_dmg = false, dodge = false;

    if (!prop1.md5 && !prop2.md5) {
        init_fighter(prop1, prop2);
    }

    num1 = getNextNum(prop1);
    num2 = getNextNum(prop2);

    if (num1 == prop1.attack) {
        double_dmg = true;
    } else if (num2 == prop2.defense) {
        dodge = true;
    }

    if (double_dmg) {
        damage = (prop1.attack + num1) * 2 - prop2.defense;
    } else if (!dodge) {
        damage = prop1.attack + num1 - prop2.defense;
    }

    if (damage < 0) {
        damage = 0;
    }

    prop2.hp = prop2.hp - damage;

    if (prop2.hp < 0) {
        prop2.hp = 0;
    }

    update_ui(prop1, prop2, damage, double_dmg, dodge);
}

function update_ui(prop1, prop2, damage, double_dmg, dodge) {
    var summary = $("#vs-message textarea").val();
    var this_round = prop1.name + " Attack!, ";
    if (dodge) {
        this_round = this_round + prop2.name + " Dodge!\n";
    } else if (double_dmg) {
        this_round = this_round + " Double Damage! " + prop2.name + " lost " + damage + "!\n";
    } else {
        this_round = this_round + prop2.name + " lost " + damage + "!\n";
    }
    summary += this_round;
    $("#vs-message textarea").val(summary);
    if (prop1.name == "Left Property") {
        $("p#hp2").text(prop2.hp)
    } else {
        $("p#hp1").text(prop2.hp)
    }

    if (prop2.hp == 0 || prop1.md5.length == 0) {
        fight_finished(prop1, prop2)
    } else {
        if (prop1.name == "Left Property") {
            setTimeout("fight" + "(prop2, prop1)", 2000);
        } else {
            setTimeout("fight" + "(prop1, prop2)", 2000);
        }
    }
}

function fight_finished(prop1, prop2) {
    var summary = $("#fight_summary textarea").val();

    if (prop2.hp == 0 || prop2.hp < prop1.hp) {
        summary = summary + prop2.name + " is defeated!";
    } else {
        summary = summary + prop1.name + " is defeated!";
    }
    $("#fight_summary textarea").val(summary);
}

function init_fighter(prop1, prop2) {
    var ori_num1, ori_num2;

    ori_num1 = prop1.latitude + prop1.longitude + prop1.landsize;
    ori_num2 = prop2.latitude + prop2.longitude + prop2.landsize;

    prop1.md5 = faultylabs.MD5(ori_num1.toString());
    prop1.hp = 100;
    prop1.attack = getNextNum(prop1);
    prop1.defense = getNextNum(prop1);
    prop1.name = "Left Property";
    $("p#attack1").text(prop1.attack)
    $("p#defense1").text(prop1.defense)

    prop2.md5 = faultylabs.MD5(ori_num2.toString());
    prop2.hp = 100;
    prop2.attack = getNextNum(prop2);
    prop2.defense = getNextNum(prop2);
    prop2.name = "Right Property";
    $("p#attack2").text(prop2.attack)
    $("p#defense2").text(prop2.defense)
}

function getNextNum(prop) {
    var char = prop.md5.charAt(0);
    prop.md5 = prop.md5.substring(1);
    return parseInt(char, 16);
}

var prop1 = {
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
}

var prop2 = {
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
    "landsize":1393,
    "latitude":-33.95437639,
    "longitude":151.13192475,
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


