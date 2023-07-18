document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('order-form');
    const formResult = document.getElementById('form-result');
    let data; // Variable to store the fetched fruit data
  
    // Fetch fruit data from the provided JSON source
    fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
      .then(response => response.json())
      .then(jsonData => {
        data = jsonData; // Store the fetched fruit data in the variable
  
        // Populate fruit options in select elements
        const fruitInputs = document.querySelectorAll('[id^="fruit-input"] select');
        fruitInputs.forEach(input => {
          data.forEach(fruit => {
            const option = document.createElement('option');
            option.value = fruit.name;
            option.textContent = fruit.name;
            input.appendChild(option);
          });
        });
      });
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Get form input values
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit-1').value;
      const fruit2 = document.getElementById('fruit-2').value;
      const fruit3 = document.getElementById('fruit-3').value;
      const extraInstructions = document.getElementById('extra').value;
  
      // Calculate total nutrition values based on selected fruits
      const selectedFruits = data.filter(fruit => [fruit1, fruit2, fruit3].includes(fruit.name));
      let totalCarbohydrates = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let totalSugar = 0;
      let totalCalories = 0;
  
      selectedFruits.forEach(fruit => {
        totalCarbohydrates += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritions.protein;
        totalFat += fruit.nutritions.fat;
        totalSugar += fruit.nutritions.sugar;
        totalCalories += fruit.nutritions.calories;
      });
  
      // Get current date
      const currentDate = new Date().toLocaleDateString();
  
      // Generate the formatted output
      const output = `
        <p><strong>Order Information:</strong></p>
        <p>First Name: ${firstName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Selected Fruits: ${fruit1}, ${fruit2}, ${fruit3}</p>
        <p>Extra Instructions: ${extraInstructions}</p>
        <p>Date: ${currentDate}</p>
        <p><strong>Total Nutrition:</strong></p>
        <p>Carbohydrates: ${totalCarbohydrates}g</p>
        <p>Protein: ${totalProtein}g</p>
        <p>Fat: ${totalFat}g</p>
        <p>Sugar: ${totalSugar}g</p>
        <p>Calories: ${totalCalories}</p>
      `;
  
      // Display the formatted output
      formResult.innerHTML = output;
    });
  });
  