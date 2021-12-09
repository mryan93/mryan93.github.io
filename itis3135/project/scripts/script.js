$(document).ready(function(){

 $("#page-content").fadeOut(0).slideDown(500);

 $("#display-button").click(function(){
  var fileName = "json_files/resume.json";
  $.ajax({
   type: "get",
   url: fileName,
   beforeSend: function(){
    $("#title-type").html("loading...");
   },
   timeout: 10000,
   error: function(xhr, status, error) {
   alert("Error: " + xhr.status + " - " + error);
   },
   datatype: "json",
   success: function(data){
    $("#title-type").html("");
    $("#programming-languages").html("");
    $("#operating-systems").html("");
    $("#languages").html("");
    $.each(data.resume, function(i, resume){
     $("#title-type").append("Primary Skills:");
     $("#programming-languages").append("Programming Languages: " + resume.programming);
     $("#operating-systems").append("Operating Systems: " + resume.os);
     $("#languages").append("Languages: " + resume.lang);
    });
   }
  });
 });
});

$(document).ready(function(){
   $("#projects-accordion").accordion({
  heightStyle: "content",
  collapsible: true
 });
});

$(document).ready(function(){
 $("#certification-slider").bxSlider({
  randomStart: true,
  auto: true,
  minSlides: 1,
  maxSlides: 1,
  slideWidth: 500,
  slideMargin: 20,
  captions: true,
  speed: 3000,
  pager: true,
  pagerSelector: '#pager',
  pagerType: 'short'
 });
});
