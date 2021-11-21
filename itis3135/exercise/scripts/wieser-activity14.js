$(document).ready(function() {
 
 $('a').addEventListener('click', function(){
  var name = $(this).getAttribute('title').value;
  $.ajax({
   type: "get",
   url: name + ".json",
   beforeSend: function(){
     $("#bio").html("loading...");
   },
   timeout: 10000,
   error: function(xhr, status, error) {
    alert("Error: " + xhr.status + " - " + error);
   },
   datatype: "json",
   success: function(data){
    $("#bio").html("");
    $("#bio").append
    ("<h3>" + data.speakers.text + "</h3>");
   }
  });
 });
	
}); // end ready