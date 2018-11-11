$(document).ready(function () {

    // Initial array of sports
    var topics = ["Boxing", "Soccer", "Baseball", "Ice hockey", "Badminton", "Basketball", "Mind sport", "Tennis", "Rowing", "Bowling", "Table tennis"];
    // apikey=WHFMIfploVoswYVxgob2X3QZdEHAgXyX;
    // curl "http://api.giphy.com/v1/gifs/search?q=cricket&api_key=WHFMIfploVoswYVxgob2X3QZdEHAgXyX&limit=10"


    function displaySportsinfo() {
        var sport = $(this).attr("data-name");

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + " &api_key=WHFMIfploVoswYVxgob2X3QZdEHAgXyX&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // parse the json and get the rating.
            var result = response.data;
            console.log(result);


            // Looping over every result item
            for (var i = 0; i < result.length; i++) {
                // Creating a div for the gif
                var gifDiv = $("<div>");
                console.log(result[i].rating)
                var p = $("<p>").text("Rating: " + result[i].rating);
                gifDiv.append(p);

                var sportimage = $("<img>");
                sportimage.attr("src", result[i].images.fixed_height_still.url);
                sportimage.attr("data-still",result[i].images.fixed_height_still.url);
                sportimage.attr("data-animate",result[i].images.fixed_height.url);
                sportimage.attr("data-state", "still");
                sportimage.addClass("gif");


                console.log(sportimage);
                gifDiv.append(sportimage);

                $("#sport-view").prepend(gifDiv);



            }
            function updateState(state, ele) {
                $(ele).attr("src", $(ele).attr("data-" + state));
                $(ele).attr("data-state", state);
              }
              $(".gif").on("click", function () {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(this).attr("data-state");
                var dAnimate = $(this).attr("data-animate")
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                  updateState('animate', this);
                } else {
                  updateState('still', this);
                }
              });
        

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



    $("#add-sportitem").on("click", function (event) {
        event.preventDefault();

        var sport = $("#sport-input").val().trim();

        topics.push(sport);
        console.log(topics);


        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
        


    });
    
    $(document).on("click", ".sport", displaySportsinfo);
    

    renderButtons();
});
