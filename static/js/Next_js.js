$(document).ready(function(){

$('#Nextstep').click(function(){
  $('.container').css({"background":"rgba(0,0,0,0.5)"});
  $('.jumpout_form').css({"opacity":"1"});
  $('.container').css({'z-index':"0"});
});

$('#form_cancel').click(function(){
   $('.container').css({"background":"rgba(0,0,0,0)"});
   $('.jumpout_form').css({"opacity":"0"});
    $('.container').css({'z-index':"3"});
});

$('.left4Button').click(function(){
   $('.jumpout_form').css({"opacity":"0","z-index":"1"});
   $('.jumpout_form2').css({"opacity":"1","z-index":"2"});

});
$('.agree').click(function(){
    $(".SelectedButton").html("同意");
});
$('.donot').click(function(){
    $(".SelectedButton").html("不予承作");
});
$('.getback').click(function(){
    $(".SelectedButton").html("退回");
});
$('.trans').click(function(){
    $(".SelectedButton").html("轉呈");
});
$('#form2_cancel').click(function(){
   $('.container').css({"background":"rgba(0,0,0,0)"});
   $('.jumpout_form2').css({"opacity":"0","z-index":"1"});
   $('.jumpout_form').css({"opacity":"0","z-index":"2"});
   $("input[type='checkbox']").prop("checked", false);
   $('.container').css({'z-index':"3"});
});

$('.decide_button').click(function(){
   $('.container').css({"background":"rgba(0,0,0,0)"});
   $('.jumpout_form2').css({"opacity":"0","z-index":"1"});
   $('.jumpout_form').css({"opacity":"0","z-index":"2"});
   $("input[type='checkbox']").prop("checked", false);
    $('.container').css({'z-index':"3"});
});

$('.back_button').click(function(){
  $('.jumpout_form').css({"opacity":"1","z-index":"2"});
  $('.jumpout_form2').css({"opacity":"0","z-index":"1"});
});
});