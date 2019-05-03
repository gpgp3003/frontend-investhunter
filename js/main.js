function egCalc(){
    $(".resposta").show();
    $(".actionner").hide();
}

function toCalc(){
    $(".resposta").hide();
    $(".actionner").show();
}

function exemplar(){
    $("#loading").hide();
    $("#areaAtivos").show();
}

function load(){
    $("#areaAtivos").hide();
    $("#loading").show();
    setTimeout(exemplar, 2000);
}

setTimeout(exemplar, 2000);