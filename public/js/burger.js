$(function () {
    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = parseInt($(this).data("devoured"));
        devoured++;
        var object = { id: id, devoured: devoured };

        $.ajax("/api/burgers/", {
          type: "PUT",
          data: object
        }).then(
          function() {
            console.log("Ate another burger!");
            location.reload();
          }
        );
      });
    
    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#name").val().trim(),
        };
        console.table(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Posted"); 
            location.reload();
        });
    });
});