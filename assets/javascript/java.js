var tags = ["Cats", "Aston Martin", "Jeremy Clarkson", "The Office"];

function alertGiphyTag() {
    var tagName = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tagName + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data

        for (var b = 0; b < tags.length; b++){
            var gifDiv = $("#tagBody");
            var gifImage = $("<img>");
            gifImage.attr("src", results[b].images.fixed_height.url);

            gifDiv.prepend(gifImage);
        }
    })
}

function renderButtons() {
    $("#tagBody").empty();

    for (var i = 0; i < tags.length; i++) {
        var a = $("<button>");
        // var gifDiv = $("<div class= 'item'>");

        a.addClass("tags");
        // var gifImage = $("<img>");

        a.attr("data-name", tags[i]);
        // gifImage.attr("src", tags[i].images.fixed_height.url);

        a.attr("<br>");
        // gifDiv.prepend(gifImage);

        // $("#tagBody").prepend(gifDiv);

        a.text(tags[i]);

        $("#tagBody").append(a);
    }
}

$("#addTag").on("click", function (event) {
    event.preventDefault();

    var tag = $("#add-tag").val().trim();

    tags.push(tag);

    renderButtons();

});

$(document).on("click", ".tags", alertGiphyTag);

renderButtons();