// When you click the save article button
$(document).on("click", "#savearticle", function() {
  // Grab the id associated with the article from the submit button
  let thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/save/" + thisId,
  })
  // With that done
  .done(function(data) {
    // Log the response
    console.log(data);
  });
});

$(document).on("click", "#openCommentModal", function() {
    let thisId = $(this).attr("data-id");
    $.ajax({
        type: "GET",
        url: "/comments/" + thisId // Modify the url according to your application logic
    }).done(function(data) {
        // Now open the modal! (Assuming you are using bootstrap.js)
        // $("#yourModal").modal("show");
        // If you used 'res.json' then you can use yourData here
        $("#commentDiv").html(data);
        console.log("grab comments on modal open " + data);
    });
});

// When you click the save comment button
$(document).on("click", "#savecomment", function() {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/savecomment/" + thisId,
    data: {
      // Value taken from note textarea
      body: $("#comment-text-input").val()
    }
  })
  // With that done
  .done(function(data) {
    // Log the response
    console.log("comment " + data);
    $("#comment-text-input").empty()
  });
});
