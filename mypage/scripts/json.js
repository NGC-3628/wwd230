// JSON link
const url = "https://ngc-3628.github.io/wwd230/other%20projects/customers.json";

// Add event listener to load data and display
document.addEventListener("DOMContentLoaded", () => {
  // Output to display info on
  const carouselInner = document.querySelector(".carousel-inner");

  // Fetch data and display it
  getCompanyData().then(companies => displayCompanies(companies, carouselInner));
});

/**
 * Fetch the company data from the JSON file
 */
async function getCompanyData() {
  try {
    // Fetch data from the provided URL and wait for its response
    const response = await fetch(url);
    // Get JSON data from the response
    const data = await response.json();
    // Return the array of company data
    return data.companies;
  } catch (error) {
    console.error("Error fetching company data:", error);
    return []; // Return an empty array in case of error
  }
}

/**
 * Display company data in the carousel
 * @param {Array} companies Array of company data
 * @param {HTMLElement} carouselInner Container for carousel items
 */
function displayCompanies(companies, carouselInner) {
  companies.forEach(company => {
    const card = document.createElement("div");
    card.classList.add("company-card");

    const logo = document.createElement("img");
    logo.setAttribute("src", company.imageurl);
    logo.classList.add("customers-logo");

    const name = document.createElement("p");
    name.textContent = company.name;
    name.classList.add("customers-name");

    card.appendChild(logo);
    card.appendChild(name);
    carouselInner.appendChild(card);
  });

  // Add event listeners to the carousel controls
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const carousel = document.querySelector(".carousel");

  prevBtn.addEventListener("click", () => {
    carousel.style.transform = "translateX(100%)";
  });

  nextBtn.addEventListener("click", () => {
    carousel.style.transform = "translateX(-100%)";
  });
}
