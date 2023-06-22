// Store references to selected elements
const temperatureElement = document.querySelector('#temperature');
const windSpeedElement = document.querySelector('#wind-speed span');
const windChillElement = document.querySelector('#wind-chill span');

document.addEventListener("DOMContentLoaded", () => {
  // API url
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Torreon&units=metric&appid=d297df6b49870f2c7ec944780213cbca";

  // Fetch API and display
  apiFetch(url)
    .then(data => displayResults(data))
    .catch(error => console.error(`API Fetch Error: ${error.message}`));

  // Calculate and set wind chill value
  const temperature = toFahrenheit(parseFloat(temperatureElement.innerText));
  const windSpeed = toMiles(parseFloat(windSpeedElement.innerText));
  const windChill = getWindChill(temperature, windSpeed);
  windChillElement.innerText = isNaN(windChill) ? "N/A" : `${toCelsius(windChill).toFixed(1)} °C`;
});

/**
 * Fetches the data from the given URL
 * @param {String} url API request URL
 * @returns {Promise<Object>} JSON data object
 */
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    throw new Error(`API Fetch Error: ${error.message}`);
  }
}

/**
 * Properly displays the weather info
 * @param {Object} weatherData JSON data object
 */
function displayResults(weatherData) {
  const weatherIcon = document.querySelector('#temperature-div img');
  const captionDesc = document.querySelector('#weather-status h3');

  // Get the temperature in Celsius without decimals
  temperatureElement.innerText = `${weatherData.main.temp.toFixed(0)} °C`;

  // Create url for icon
    const iconCode = weatherData.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${iconCode}.png`;
  // Create alt text
  const desc = weatherData.weather[0].description.capitalize();

  // Set properties
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  windSpeedElement.innerText = `${weatherData.wind.speed} km/h`;
}



