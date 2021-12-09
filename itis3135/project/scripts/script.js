$(document).ready(function(){
// Animation upon loading page
 $("#page-content").fadeOut(0).slideDown(500);

// Ajax function for loading json information on about.html

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
    $("#display-button").css("display", "none");
   }
  });
 });
});

// Accordion jquery ui widget for projects

$(document).ready(function(){
   $("#projects-accordion").accordion({
  heightStyle: "content",
  collapsible: true
 });
});

// Box slider jquery ui widget for certifications

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

// Datepicker ui widget implementation

$(document).ready(function(){
 $("#date").datepicker({
  minDate: new Date(),
  maxDate: +200,
  showButtonPanel: true
 });

 // Initializing tooltips

 $(document).tooltip();
});

// Ajax request for resume2 information

$(document).ready(function(){
 $("#display-button2").click(function(){
  var fileName = "json_files/resume2.json";
  $.ajax({
   type: "get",
   url: fileName,
   beforeSend: function(){
    $("#title-type2").html("loading...");
   },
   timeout: 10000,
   error: function(xhr, status, error) {
   alert("Error: " + xhr.status + " - " + error);
   },
   datatype: "json",
   success: function(data){
    $("#title-type2").html("");
    $("#rank").html("");
    $("#computer").html("");
    $("#achievement").html("");
    $.each(data.resume2, function(i, resume2){
     $("#title-type2").append("Military Experience:");
     $("#rank").append("Rank: " + resume2.Rank);
     $("#computer").append("Computer Skills: " + resume2.Computer);
     $("#achievement").append("Major Achievements: " + resume2.Achievements);
    });
    $("#display-button2").css("display", "none");
   }
  });
 });
});
