$(document).ready(function(){

 $.ajax({
  type: "get",
  url: "facultyList.json",
  beforeSend: function(){
   $("#faculty").html("loading...");
  },
  timeout: 10000,
  error: function(xhr, status, error){
   alert("Error : " + xhr.status + " - " + error);
  },
  datatype: "json",
  success: function(data){
   $("#faculty").html("");
   $.each(data.facultymembers, function(i, facultymembers){
    $("#faculty").append
    ("<img src=" + facultymembers.image + " alt=''>" + 
    "<br>" +
    "<h2>" + facultymembers.full_name + "</h2>" + 
    "<h3>" + facultymembers.department + "</h3>" + 
    "<p>" + facultymembers.bio + "</p>");
   });
  }
 });
});
