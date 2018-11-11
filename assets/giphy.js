$(document).ready(function () {

    // Initial array of sports
    var topics = ["Boxing", "Soccer", "Baseball", "Ice hockey", "Badminton", "Basketball", "Mind sport", "Tennis", "Rowing", "Bowling", "Table tennis"];
    // apikey=WHFMIfploVoswYVxgob2X3QZdEHAgXyX;
    // curl "http://api.giphy.com/v1/gifs/search?q=cricket&api_key=WHFMIfploVoswYVxgob2X3QZdEHAgXyX&limit=10"
    function displaySportsinfo() {
        var sport = $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ sport +" &api_key=WHFMIfploVoswYVxgob2X3QZdEHAgXyX&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#sport-view").text(JSON.stringify(response));
        });

    }







    function renderButtons() {
        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {
            var sports = $("<button>");
            sports.addClass("sport");
            sports.attr("data-name", topics[i]);
            sports.text(topics[i]);
            $("#buttons-view").append(sports);
        }

    }



    $("#add-sportitem").on("click", function(event) {
        event.preventDefault();

        var sport = $("#sport-input").val().trim();

        topics.push(sport);
        console.log(topics);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      $(document).on("click", ".sport", displaySportsinfo );

    renderButtons();
});
