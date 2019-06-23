//Next step jump out form//
$(document).ready(function () {
    var popup1 = $('.jumpout_form');
    var popup2 = $('.jumpout_form2');
    popup1.hide();
    popup2.hide();
    $('#Nextstep').click(function () {
        $('#cover').css('display', 'block');
        $('#cover').css('height', document.body.clientHeight + 'px');
        popup1.show();
        $('.container').css({ 'z-index': "0" });
    });
    $('#form_cancel').click(function () {
        $('#cover').css('display', 'none');
         popup1.hide()
        $('.container').css({ 'z-index': "3" });
    });
    $('.left4Button').click(function () {
        popup1.hide();
        popup2.show();
    });
    $('.agree').click(function () {
        $(".SelectedButton").html("同意");
    });
    $('.donot').click(function () {
        $(".SelectedButton").html("不予承作");
    });
    $('.getback').click(function () {
        $(".SelectedButton").html("退回");
    });
    $('.trans').click(function () {
        $(".SelectedButton").html("轉呈");
    });
    $('#form2_cancel').click(function () {
        $('#cover').css('display', 'none');
         popup1.hide();
         popup2.hide();
        $("input[type='checkbox']").prop("checked", false);
        $('.container').css({ 'z-index': "3" });
    });
    $('.decide_button').click(function () {
        $('#cover').css('display', 'none');
        popup1.hide();
        popup2.hide();
        $("input[type='checkbox']").prop("checked", false);
        $('.container').css({ 'z-index': "3" });
    });
    $('.back_button').click(function () {
        popup2.hide();
        popup1.show();
    });


    
});