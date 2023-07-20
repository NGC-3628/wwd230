// Function to fetch JSON data from the provided URL
function fetchCompaniesData() {
    return fetch('https://ngc-3628.github.io/wwd230/other%20projects/companies.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
}

// Function to pick random companies and update the DOM
function displayRandomCompanies(companiesData) {
    const spotlightSections = document.querySelectorAll('.spotlight-home-section');
    const randomCompanies = getRandomItems(companiesData.companies, 2);

    // Display information of the randomly selected companies
    for (let i = 0; i < randomCompanies.length; i++) {
        const company = randomCompanies[i];

        spotlightSections[i].innerHTML = `
            <h3>${company.name}</h3>
            <p>Field: ${company.field}</p>
            <p>Location: ${company.location}</p>
            <p>Origin: ${company.Origin}</p>
            <p>Workforce: ${company.Workforce}</p>
            <img src="${company.imageurl}" alt="${company.name}">
        `;
    }
}

// Function to get random non-repeating items from an array
function getRandomItems(array, count) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
    return shuffledArray.slice(0, count);
}

// On page load, fetch data and display random companies
window.onload = function() {
    fetchCompaniesData()
        .then(data => displayRandomCompanies(data));
};