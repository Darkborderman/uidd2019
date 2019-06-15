//Next step jump out form//
$(document).ready(function () {

    $('#Nextstep').click(function () {
        $('#cover').css('display', 'block');
        $('#cover').css('height', document.body.clientHeight + 'px');
        $('.jumpout_form').css({ "opacity": "1" });
        $('.container').css({ 'z-index': "0" });
    });
    $('#form_cancel').click(function () {
        $('#cover').css('display', 'none');
        $('.jumpout_form').css({ "opacity": "0" });
        $('.container').css({ 'z-index': "3" });
    });
    $('.left4Button').click(function () {
        $('.jumpout_form').css({ "opacity": "0", "z-index": "1" });
        $('.jumpout_form2').css({ "opacity": "1", "z-index": "2" });
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
        $('.jumpout_form2').css({ "opacity": "0", "z-index": "1" });
        $('.jumpout_form').css({ "opacity": "0", "z-index": "2" });
        $("input[type='checkbox']").prop("checked", false);
        $('.container').css({ 'z-index': "3" });
    });
    $('.decide_button').click(function () {
        $('#cover').css('display', 'none');
        $('.jumpout_form2').css({ "opacity": "0", "z-index": "1" });
        $('.jumpout_form').css({ "opacity": "0", "z-index": "2" });
        $("input[type='checkbox']").prop("checked", false);
        $('.container').css({ 'z-index': "3" });
    });
    $('.back_button').click(function () {
        $('.jumpout_form').css({ "opacity": "1", "z-index": "2" });
        $('.jumpout_form2').css({ "opacity": "0", "z-index": "1" });
    });

    let tabList=["contract_form",
    "verification",
    "applicant_form",
    "record_report",
    "scanning"];
    let currentTab='contract_form';
    for(let item of tabList){
        document.getElementById(item).addEventListener("click",()=>{
            console.log(item);
            document.getElementById(currentTab).style=`  color:#888888;
            background-color:#f7f7f7;`;
            currentTab=item;
            document.getElementById(item).style=`color:#595757; background-color:#DEDFE0;`;
        });
    }
    
});