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

        for (var b = 0; b < tags.length; b++) {
            var gifDiv = $("#tagBody");
            var gifImage = $("<img>");
            gifImage.attr("src", results[b].images.fixed_height.url);
            gifImage.attr("data-still", results[b].images.original_still.url);
            gifImage.attr("data-animate", results[b].images.fixed_height.url);
            gifImage.attr("data-state", "animate");
            gifImage.addClass("gif");
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

$(document).on("click", ".gif", function () {
    // STEP ONE: study the html above.
    // Look at all the data attributes.
    // Run the file in the browser. Look at the images.

    // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

    // STEP TWO: make a variable named state and then store the image's data-state into it.
    // Use the .attr() method for this.

    // ============== FILL IN CODE HERE FOR STEP TWO =========================
    console.log(".gif on click");
    var state = $(this).attr("data-state");


    // =============================================

    // STEP THREE: Check if the variable state is equal to 'still',
    // then update the src attribute of this image to it's data-animate value,
    // and update the data-state attribute to 'animate'.

    // If state is equal to 'animate', then update the src attribute of this
    // image to it's data-still value and update the data-state attribute to 'still'
    // ============== FILL IN CODE HERE FOR STEP THREE =========================

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }

    else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

    else {
        alert("MOVE DANGIT!!");
    }

    // ==============================================

    // STEP FOUR: open the file in the browser and click on the images.
    // Then click again to pause.
});


$(document).on("click", ".tags", alertGiphyTag);

renderButtons();