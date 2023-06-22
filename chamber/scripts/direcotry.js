// JSON link:
const url = 'https://ngc-3628.github.io/wwd230/other%20projects/companies.json';

// Add event listener to load the data and display it
document.addEventListener("DOMContentLoaded", () => {
  // select the output container element
  const cards = document.querySelector('div.cards');
  
  // Fetch the JSON data and display it
  getCompanyData().then(companies => displayCompanies(companies));
});

/**
 * Fetches the company data from the JSON file
 */
async function getCompanyData() {
  // Fetch data from the provided URL and wait for the response
  const response = await fetch(url);
  // Get JSON data from the response
  const data = await response.json();
  // Return the array of company data
  return data.companies;
}

/**
 * Display the company data on the web page
 * @param {Array} companies Array of company data
 */
function displayCompanies(companies) {
  // select the output container element
  const cards = document.querySelector('div.cards');
  
  // Loop through every company
  companies.forEach(company => {
    // Create elements for company information
    let card = document.createElement('div');
    let name = document.createElement('h2');
    let logo = document.createElement('img');
    let field = document.createElement('h4');
    let location = document.createElement('p');
  
    // Set the content for company information
    name.textContent = company.name;
    logo.setAttribute('src', company.imageurl);
    field.textContent = `Field: ${company.field}`;
    location.textContent = `Location: ${company.location}`;
  
    // Append the elements to the card
    card.appendChild(name);
    card.appendChild(logo);
    card.appendChild(field);
    card.appendChild(location);

    //Make elements plastic to work with CSS
    name.setAttribute('class', 'directoryPage-name');
    logo.setAttribute('class', 'directoryPage-img');
    field.setAttribute('class', 'directoryPage-field');
    location.setAttribute('class', 'directoryPage-location');
  
    // Add CSS class to the card for styling
    card.classList.add('company-card');
  
    // Append the card to the container
    cards.appendChild(card);
  });
}
