import axios from "axios";
import { cached } from "../utils/cache.js";

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    const err = new Error(`Missing env var: ${name}`);
    err.status = 500;
    throw err;
  }
  return v;
}

export async function getWeatherByCity(city) {
  const apiKey = requireEnv("OPENWEATHER_API_KEY");

  const cacheKey = `weather:${city.toLowerCase()}`;
  return cached(
    cacheKey,
    async () => {
      const url = "https://api.openweathermap.org/data/2.5/weather";
      const { data } = await axios.get(url, {
        params: { q: city, appid: apiKey, units: "metric" },
        timeout: 10_000,
      });

      const temperature = data?.main?.temp ?? null;
      const feelsLike = data?.main?.feels_like ?? null;
      const description = data?.weather?.[0]?.description ?? "N/A";
      const coordinates = data?.coord
        ? { lon: data.coord.lon, lat: data.coord.lat }
        : null;
      const windSpeed = data?.wind?.speed ?? null;
      const countryCode = data?.sys?.country ?? null;

      const rainVolumeLast3h = data?.rain?.["3h"] ?? 0;

      return {
        cityName: data?.name ?? city,
        temperature,
        feelsLike,
        description,
        coordinates,
        windSpeed,
        countryCode,
        rainVolumeLast3h,
      };
    },
    60_000
  );
}
