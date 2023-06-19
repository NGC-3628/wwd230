//JSON link
const url = "https://ngc-3628.github.io/wwd230/other%20projects/companies.json";


// Add event listeners to filters
document.addEventListener("DOMContentLoaded", () => {
    // select the output container element
    const cards = document.querySelector('div.cards'); 
    // No filter button
    document.querySelector("#noFilter").addEventListener("click", () => {
        // Clear cards
        cards.innerHTML = "";
        // Get prophets data and display
        getProphetData().then(companies => displayProphets(companies));
    });

     // Served more than a decade filter
     document.querySelector("#decade-filter").addEventListener("click", () => {
        // Clear cards
        cards.innerHTML = "";
        // Get prophets data
        getProphetData().then(companies => {
            // filter by years of service
            const filter = companies.filter((company) => {
                // Only more than ten years
                if (company.length >= 10) {return company;}
            });
            // Display prophets
            displayProphets(filter);
        })
    });
    // Get prophets data and display
    getCompanytData().then(companies => displayProphets(companies));
});

/**
 * Gets the company data from a JSON request
 */
async function getCompanyData() {
    // Fetch data from url and wait for response
    const response = await fetch(url);
    // Get JSON data from response
    const data = await response.json();
    // Output the Array data from the JSON
    //console.table(data.prophets); 
    // Return prophets data
    return data.companies;
}