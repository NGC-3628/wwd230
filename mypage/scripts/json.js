//JSON link
const url = "https://ngc-3628.github.io/wwd230/other%20projects/companies.json";

//add event listener to load data and display:
document.addEventListener("DOMContentLoaded", () => {
    
    //ouptup to display info on:
    const cards = document.querySelector("div.cust-clien");

    //Fetch data and display it:
    getCompanyData().then(companies => displayCompanies(companies));
});

/**
 * fetch the company data from the JSON file
 * 
 */
async function getCompanyData(){
    //Fetch dara from teh provided URL and wait for its response
    const response = await fetch(url);
    // Get JSON data from the response
    const data = await response.json();
    //Return the array of company data
    return data.companies
}

/**
 * Display company data on the web page
 * @param {Array} companies Array of company data
 */
function displayCompanies(companies) {
    //select the output container element
    const cards = document.querySelector("div.cust-clien");

    //loop thru every company
    companies.forEach(company => {
        //create elements for company information
        let logo = document.createElement("img");
        let name = document.createElement("p");

        //set contant for company information
        logo.setAttribute("src", company.imageurl);
        name.textContent = company.name;

        //Append the elements to the cards
        cards.appendChild(logo);
        cards.appendChild(name);

        //Making elements plastic thus CSS affect 'em
        logo.setAttribute("class", "customers-logo");
        name.setAttribute("class", "customers-name");


        //Add CSS class to card for styling
        cards.classList.add("company-card");

        //Append the card to the container
        cards.appendChild(card);
    })
}
