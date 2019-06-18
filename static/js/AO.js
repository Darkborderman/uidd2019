$("#ham1").click(function(){
  $("#con2").show()
  $("#con3").show()
  $("#con4").show()
  $("#second1").hide();
  $("#second2").hide();
  $("#second3").hide(); 
});

$("#con2").click(function(){
  $(this).hide()
  $("#second1.block").toggle();
});
$("#con3").click(function(){
  $(this).hide()
  $("#second2.block").toggle();
});
$("#con4").click(function(){
   $(this).hide()
  $("#second3.block").toggle();
});

$("#second1.block").click(function(){
  $(this).hide()
  $("#con2").toggle();
});
$("#second2.block").click(function(){
  $(this).hide()
  $("#con3").toggle();
});
$("#second3.block").click(function(){
   $(this).hide()
  $("#con4").toggle();
});
// tom part , click button 計算風險定價 and show new information
var newinfo = document.getElementById("con20");
var mySelect1 = document.getElementById("selected1");
var mySelect2 = document.getElementById("selected2");
var mySelect3 = document.getElementById("selected3");


function CreateNewinfo(){
  var para=document.createElement("p");
  var showinput = document.getElementById("input_show").value;
  para.innerText = '第'+showinput+'期起，機動:105個金放款/房貸指標(月)+13.6%，目前利率14.68%'
  newinfo.appendChild(para);
};
function CreateNewinfo2(){
  var para=document.createElement("p");
  var showinput = document.getElementById("input_show").value;
  para.innerText = '第'+showinput+'期起，機動:105個金放款/房貸指標(月)+10%，目前利率10.68%'
  newinfo.appendChild(para);
};

$('#btn1').click(function(){

 if(mySelect1.options[1].selected == true && 
   mySelect2.options[1].selected == true &&
   mySelect3.options[1].selected == true  ){
   CreateNewinfo();
}
 if(mySelect1.options[1].selected == true && 
   mySelect2.options[1].selected == true &&
   mySelect3.options[2].selected == true  ){
   CreateNewinfo2();
}


});

$(function(){
 
  // 偵聽a click
  $(".me_buy a").bind("click",function(){

      var id=$(this).attr("data-id");

      // 取得目標區塊的y座標
      var target_top = $("#area"+id).offset().top;

      // 取得body物件 這種寫法在各瀏覽器上最保險
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

      // 移動捲軸無動畫效果
           //$body.scrollTop(target_top);

      // 移動捲軸有動畫效果
           $body.animate({
                 scrollTop: target_top
           }, 800);

  })
})