// JavaScript source code
//Img Aside
//auto4
$(document).ready(function () {
    var stt = 0;
    starImg = $("img#auto4:first").attr("stt");
    endImg = $("img#auto4:last").attr("stt");
    $("img#auto4").each(function () {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").on("click", function () {
        if (stt == endImg) {
            stt = -1;
        }
        next = ++stt;
        $("img#auto4").hide();
        $("img#auto4").eq(next).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);
});
//Img Aside
//auto5
$(document).ready(function () {
    var stt = 0;
    starImg = $("img#auto5:first").attr("stt");
    endImg = $("img#auto5:last").attr("stt");
    $("img#auto5").each(function () {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").on("click", function () {
        if (stt == endImg) {
            stt = -1;
        }
        next = ++stt;
        $("img#auto5").hide();
        $("img#auto5").eq(next).show();
    });
    setInterval(function () {
        $("#next").click();
    }, 2000);
});


