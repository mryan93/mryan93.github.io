$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data.teammembers, function(i, teammembers){
                $("#team").append
                ("<h3>" + teammembers.name + "</h3>" +
                teammembers.title + "<br>" +
                teammembers.bio + "<br>");
            });
        }
    });
});