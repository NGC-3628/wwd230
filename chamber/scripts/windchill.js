// Get the temperature and wind speed values from the page
var temperatureValue = parseFloat(document.getElementById("temperature").innerText);
var windSpeedValue = parseFloat(document.getElementById("wind-speed-value").innerText);

// Check if the values meet the specification limits
if (temperatureValue <= 50 && windSpeedValue > 3.0) {
  // Calculate the wind chill factor
  var windChillValue = 35.74 + (0.6215 * temperatureValue) - (35.75 * Math.pow(windSpeedValue, 0.16)) + (0.4275 * temperatureValue * Math.pow(windSpeedValue, 0.16));

  // Display the wind chill factor value
  document.getElementById("wind-chill-value").innerText = windChillValue.toFixed(2) + " °F";
} else {
  // Display "N/A" if the values do not meet the requirements
  document.getElementById("wind-chill-value").innerText = "N/A";
}
