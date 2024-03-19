async function getWeather() {
  const apiKey = "24ef64d52084fa1a6e7f0fc08c65911a";
  const cityInput = document.getElementById("city-input").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
}

function displayWeather(data) {
  getWeather();
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperatura: ${data.main.temp}°C</p>
      <p>Condizioni: ${data.weather[0].description}</p>
      <p>Umidità: ${data.main.humidity}%</p>
      <p>Pressione: ${data.main.pressure} hPa</p>
      <p>Velocità del vento: ${data.wind.speed} m/s</p>
    `;
}
