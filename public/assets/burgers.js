$(document).ready( function(){
  // create new burger event
    $(".create-burger-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/newburger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    // consumge burger
    $(".btn-burger").on("click", function() {
      var selectedID = {
        id: $(this).data("id")
      }
      // Send the DELETE request.
      $.ajax("/api/update", {
        type: "PUT",
        data: selectedID
      }).then(
        function() {
          console.log("updated burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });