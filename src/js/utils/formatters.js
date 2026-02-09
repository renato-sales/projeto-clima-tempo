export function formatTemperature(temp) {
  return `${Math.round(temp)}°C`;
}

export function getWeatherDescription(code) {
  const descriptions = {
    0: "Céu limpo",
    1: "Principalmente limpo",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina com gelo",
    51: "Garoa leve",
    61: "Chuva fraca",
    63: "Chuva moderada",
    65: "Chuva forte",
    80: "Pancadas de chuva",
    95: "Tempestade",
  };

  return descriptions[code] || "Clima desconhecido";
}
