$(document).ready(function(){
  //右上角圖案的變色
  $("div.tr1").hover(function(){
    $("div.tr1").css({"background-color":"#b5d6e2","color":"#005584"});
    },function(){
    $("div.tr1").css({"background-color":"#eeeeef","color":"#888888"});
  });
  
  $("div.tr2").hover(function(){
    $("div.tr2").css({"background-color":"#b5d6e2","color":"#005584"});
    },function(){
    $("div.tr2").css({"background-color":"#eeeeef","color":"#888888"});
  });
//左邊四格的變色
$("div.midle").each(function(index2) { 
  $("#left"+index2+"").hover(function(){
    $("#left"+index2+"").css({"background-color":"#005584","color":"white"});
    },function(){
    $("#left"+index2+"").css({"background-color":"#f7f7f7","color":"#888888"});
  });
});
$("#left4").hover(function(){
    $("#left4").css({"background-color":"#005584","color":"white"});
    },function(){
    $("#left4").css({"background-color":"#f7f7f7","color":"#888888"});
  });

//上面8格的變色
$("div.top").each(function(index) { 
  $("#top"+index+"").hover(function(){
    $("#top"+index+"").css({"background-color":"#eff6f9","color":"#005584","font-size":"20px"
      ,"font-weight":"bold"});
    },function(){
    $("#top"+index+"").css({"background-color":"#f7f7f7","color":"#888888","font-size":"16px"
      ,"font-weight":"normal"});
  });
});

$("#top8").hover(function(){
    $("#top8").css({"background-color":"#eff6f9","color":"#005584","font-size":"20px"
      ,"font-weight":"bold"});
    },function(){
    $("#top8").css({"background-color":"#f7f7f7","color":"#888888","font-size":"16px"
      ,"font-weight":"normal"});
  });
//右上角房子變色
$('#topmidpic').bind({
 mouseenter: function(e){
$('#topmidpic img').attr("src","housewhite.png");
$('#topmidpic').css({"background-color":"#005584"});
 },
 mouseleave: function(e){
$('#topmidpic img').attr("src","housegray.png");
$('#topmidpic').css({"background-color":"#f7f7f7"});

 }
});
 //第一列資料的變色及選取後的反應
$('div.data').bind({

   mouseenter: function(e) {
$("div.data").css({"background-color":"#595757","color":"white"});
},

   mouseleave: function(e) {
$("div.data").css({"background-color":"#f7f7f7","color":"#888888"});
},

   click: function(e) {
$("#leftbottompic1 img").attr("src","enter2.png");
$("#leftbottompic2 img").attr("src","garbage2.png");
$("div.data").css({"background-color":"#575757","color":"white"});
$('div.data').unbind('mouseenter').unbind('mouseleave');
$('div.data2').css({"background-color":"#f7f7f7","color":"#888888"});
$('div.data2').bind({

   mouseenter: function(e) {
$("div.data2").css({"background-color":"#575757","color":"white"});
},

   mouseleave: function(e) {
$("div.data2").css({"background-color":"#f7f7f7","color":"#888888"});
}
});
}
});

//第二列的資料變色及選取後的反應
$('div.data2').bind({

   mouseenter: function(e) {
$("div.data2").css({"background-color":"#575757","color":"white"});
},

   mouseleave: function(e) {
$("div.data2").css({"background-color":"#f7f7f7","color":"#888888"});
},

   click: function(e) {
$("#leftbottompic1 img").attr("src","enter2.png");
$("#leftbottompic2 img").attr("src","garbage2.png");
$("div.data2").css({"background-color":"#575757","color":"white"});
$('div.data2').unbind('mouseenter').unbind('mouseleave');
$('div.data').css({"background-color":"#f7f7f7","color":"#888888"});
$('div.data').bind({

   mouseenter: function(e) {
$("div.data").css({"background-color":"#575757","color":"white"});
},

   mouseleave: function(e) {
$("div.data").css({"background-color":"#f7f7f7","color":"#888888"});
}
});
}
});
});

