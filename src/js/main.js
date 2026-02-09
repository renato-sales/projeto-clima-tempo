import { getWeatherByCity } from "./api/weatherService.js";
import {
  renderError,
  renderLoading,
  renderWeather,
} from "./ui/renderWeather.js";

const form = document.querySelector("#weather-form");
const input = document.querySelector("#city-input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  try {
    renderLoading();
    const weather = await getWeatherByCity(city);
    renderWeather(weather);

    localStorage.setItem("lastCity", city);
  } catch (error) {
    renderError(error.message);
  }
});

// 🔁 Carregar última cidade pesquisada
const lastCity = localStorage.getItem("lastCity");
if (lastCity) {
  input.value = lastCity;
}
