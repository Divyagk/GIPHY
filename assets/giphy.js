

// Initial array of sports
var topics = ["Boxing","Soccer","Baseball","Ice hockey","Badminton","Basketball","Mind sport","Tennis","Rowing","Bowling","Table tennis"];
// apikey=WHFMIfploVoswYVxgob2X3QZdEHAgXyX;
// curl "http://api.giphy.com/v1/gifs/search?q=cricket&api_key=WHFMIfploVoswYVxgob2X3QZdEHAgXyX&limit=10"

    function renderButtons() {
        var sports=$("<button>");
        sports.addClass("sport");
        sports.attr("data-name",topics[i]);
        sports.text(topics[i]);
        $("#buttons-view").append( sports);







    }


