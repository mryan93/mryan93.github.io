$(document).ready(function() {
 
 $("a[title]").click(function(){
  var fileName = "json_files/" + $(this).attr('title') + ".json";
  $.ajax({
   type: "get",
   url: fileName,
   beforeSend: function(){
     $("#bio").html("loading...");
   },
   timeout: 10000,
   error: function(xhr, status, error) {
    alert("Error: " + xhr.status + " - " + error);
   },
   datatype: "json",
   success: function(data){
    $("#title").html("");
    $("#name").html("");
    $("#month").html("");
    $("#bio").html("");
    $.each(data.speakers, function(i, speakers){
      $("#image").attr("src", speakers.image);
      $("#title").append(speakers.title);
      $("#name").append(speakers.speaker);
      $("#month").append(speakers.month);
      $("#bio").append(speakers.text);
    });
   }
  });
 });
	
}); // end ready