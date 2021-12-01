$(document).ready(function(){

 var url = "https://api.flickr.com/services/feeds/photos_public.gne?" + 
 "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

 $.getJSON(url, function(data){
  var html = "";
  $.each(data.items, function(i, item){
   $("#new_building").append
   ("<a href=" + item.media.m + " data-lightbox='images' data-title='my_image'>" + "<img src=" + item.media.m + ">" +
   "</a>");
  });
 });

});