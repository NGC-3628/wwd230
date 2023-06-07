document.addEventListener('DOMContentLoaded', function() {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== 'undefined') {
      // Get the current date
      var currentDate = new Date();
  
      // Get the last visited date from local storage
      var lastVisited = localStorage.getItem('lastVisited');
  
      if (lastVisited) {
        // Convert the last visited date string to a Date object
        lastVisited = new Date(lastVisited);
  
        // Calculate the difference in milliseconds between the current date and the last visited date
        var timeDifference = currentDate - lastVisited;
  
        // Calculate the difference in days (rounded to a whole number)
        var daysDifference = Math.round(timeDifference / (1000 * 60 * 60 * 24));
  
        // Display the days difference in the HTML element
        document.getElementById('last-visited').textContent = daysDifference + ' days ago';
      }
  
      // Store the current date in local storage
      localStorage.setItem('lastVisited', currentDate);
    }
  });
  