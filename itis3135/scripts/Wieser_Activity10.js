$(document).ready(function() {


        // preload the image for each link

        var images = [
                ["Activity10_images/h1.jpg"],
                ["Activity10_thumbnails/t1.jpg"],
                ["Activity10_images/h2.jpg"],
                ["Activity10_thumbnails/t2.jpg"],
                ["Activity10_images/h3.jpg"],
                ["Activity10_thumbnails/t3.jpg"],
                ["Activity10_images/h4.jpg"],
                ["Activity10_thumbnails/t4.jpg"],
                ["Activity10_images/h5.jpg"],
                ["Activity10_thumbnails/t5.jpg"],
                ["Activity10_images/h6.jpg"],
                ["Activity10_thumbnails/t6.jpg"]
        ];

        // set up the event handlers for each link

        function fadeImage(id){
                $('#' + id).click(function(event){
                        event.preventDefault();
                        document.getElementById("img-display").innerHTML = `<img src='Activity10_images/${id}.jpg' alt=''>`;
                        $("#img-display").fadeIn(1500).fadeOut(1500);
                        let imgNum = id.slice(-1);
                        document.getElementById("caption").innerHTML = `James Allison: 1-${imgNum}`;
                        $("#caption").fadeIn(1500).fadeOut(1500); 
                })
        }


    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link
            //$("#h1").click(function(event){
            //        event.preventDefault();
            //        document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h1.jpg' alt='' //id='image6'>";
            //        $("#img-display").fadeIn(1500).fadeOut(1500);
            //        document.getElementById("caption").innerHTML = "James Allison: 1-1";
            //        $("#caption").fadeIn(1500).fadeOut(1500);
            //});
            //$("#h2").click(function(event){
            //        event.preventDefault();
            //        document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h2.jpg' alt='' //id='image6'>";
            //        $("#img-display").fadeIn(1500).fadeOut(1500);
            //        document.getElementById("caption").innerHTML = "James Allison: 1-2";
            //        $("#caption").fadeIn(1500).fadeOut(1500);
            //});
            //$("#h3").click(function(event){
            //event.preventDefault();
            //document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h3.jpg' alt='' //id='image6'>";
            //$("#img-display").fadeIn(1500).fadeOut(1500);
            //document.getElementById("caption").innerHTML = "James Allison: 1-3";
            //$("#caption").fadeIn(1500).fadeOut(1500);
            //
            //.click(function(event){
            //event.preventDefault();
            //document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h4.jpg' alt='' //id='image6'>";
            //$("#img-display").fadeIn(1500).fadeOut(1500);
            //document.getElementById("caption").innerHTML = "James Allison: 1-4";
            //$("#caption").fadeIn(1500).fadeOut(1500);
            //
            //.click(function(event){
            //event.preventDefault();
            //document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h5.jpg' alt='' //id='image6'>";
            //$("#img-display").fadeIn(1500).fadeOut(1500);
            //document.getElementById("caption").innerHTML = "James Allison: 1-5";
            //$("#caption").fadeIn(1500).fadeOut(1500);
            //
            //.click(function(event){
            //event.preventDefault();
            //document.getElementById("img-display").innerHTML = "<img src='Activity10_images/h6.jpg' alt='' //id='image6'>";
            //$("#img-display").fadeIn(1500).fadeOut(1500);
            //document.getElementById("caption").innerHTML = "James Allison: 1-6";
            //$("#caption").fadeIn(1500).fadeOut(1500);
            //


    // move the focus to the first link
    $("#h1").focus();

}); // end ready