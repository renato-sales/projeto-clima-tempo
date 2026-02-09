import {
  formatTemperature,
  getWeatherDescription,
} from "../utils/formatters.js";

const container = document.querySelector("#weather-result");

export function renderLoading() {
  container.innerHTML = `<p class="loading">Carregando...</p>`;
}

export function renderError(message) {
  container.innerHTML = `<p class="error">${message}</p>`;
}

export function renderWeather(data) {
  container.innerHTML = `
    <div class="weather-card">
      <h2>${data.city}, ${data.country}</h2>
      <p>🌡️ Temperatura: ${formatTemperature(data.temperature)}</p>
      <p>💨 Vento: ${data.windspeed} km/h</p>
      <p>🌥️ ${getWeatherDescription(data.weathercode)}</p>
    </div>
  `;
}
