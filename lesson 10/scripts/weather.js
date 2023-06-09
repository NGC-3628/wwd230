// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=d297df6b49870f2c7ec944780213cbca"

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }


function displayResults(weatherData) {
  const tempFahrenheit = weatherData.main.temp.toFixed(0);
  const tempCelsius = ((tempFahrenheit - 32) * 5) / 9;

  currentTemp.innerHTML = `<strong>${tempCelsius.toFixed(0)} &deg;C</strong>`;


  /*currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)} &deg;F</strong>`;*/

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

}
apiFetch();