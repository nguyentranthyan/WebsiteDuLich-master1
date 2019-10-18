// JavaScript source code
function ten(txt,er) {
    var reEx = /^[A-Z]\w*/;
    var gt = $(txt).val();
    if (gt == "") {
        $(er).addClass("loi");
        $(er).html("*");
        return false;
    }
    else if (reEx.test(gt) == false) {
        $(er).addClass("loi");
        $(er).html("Bắt đầu bằng kí tự hoa");
        return false;
    }
    else {
        $(er).html("");
        return true;
    }
}
function email(txt, er) {
    var reEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/;
    var gt = $(txt).val();
    if (gt == "") {
        $(er).addClass("loi");
        $(er).html("*");
        return false;
    }
    else if (reEx.test(gt) == false) {
        $(er).addClass("loi");
        $(er).html("Email không chính xác");
        return false;
    }
    else {
        $(er).html("");
        return true;
    }
}
function kiemtra() {
    if (ten("#name") == true && email("#email") == true) {
        return true;
    }
    else {
        return false;
    }
}
$(function () {
    $("#name").on("blur", function () {
        ten($("#name"), $("#ername"));
    })
    $("#email").on("blur", function () {
        email($("#email"), $("#eremail"));
    })
    $("#send").on("click", function () {
        if (kiemtra()) {
            var name = $("#name").val();
            var email = $("#email").val();
            var comment = $("#comment").val();
            var dongmoi = "<tr><td>" + name + "</td><td>" + email + "</td><td>" + comment + "</td></tr>";
            $("table tbody").append(dongmoi);
        }
        else {
            alert("Bạn cần nhập đầy đủ thông tin và chính xác !");
        }
    })
});