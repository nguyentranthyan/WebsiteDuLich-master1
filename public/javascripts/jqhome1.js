// JavaScript source code
//Img Aside
// auto1
$(document).ready(function () {
    var stt = 0;
    starImg = $("img#auto1:first").attr("stt");
    endImg = $("img#auto1:last").attr("stt");
    $("img#auto1").each(function () {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").on("click", function () {
        if (stt == endImg) {
            stt = -1;
        }
        next = ++stt;
        $("img#auto1").hide();
        $("img#auto1").eq(next).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);
});
//Img Aside
//auto2
$(document).ready(function () {
    var stt = 0;
    starImg = $("img#auto2:first").attr("stt");
    endImg = $("img#auto2:last").attr("stt");
    $("img#auto2").each(function () {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").on("click", function () {
        if (stt == endImg) {
            stt = -1;
        }
        next = ++stt;
        $("img#auto2").hide();
        $("img#auto2").eq(next).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function () {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});



