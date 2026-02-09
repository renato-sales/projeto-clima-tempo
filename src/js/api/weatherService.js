const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeatherByCity(city) {
  // 1️⃣ Buscar latitude e longitude
  const geoResponse = await fetch(
    `${GEO_API_URL}?name=${encodeURIComponent(
      city
    )}&count=1&language=pt&format=json`
  );

  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  // 2️⃣ Buscar clima
  const weatherResponse = await fetch(
    `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  const weatherData = await weatherResponse.json();

  return {
    city: name,
    country,
    temperature: weatherData.current_weather.temperature,
    windspeed: weatherData.current_weather.windspeed,
    weathercode: weatherData.current_weather.weathercode,
  };
}
