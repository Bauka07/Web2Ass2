import { Router } from "express";
import { getWeatherByCity } from "../services/weatherService.js";
import { getNewsByQuery } from "../services/newsService.js";
import { getCountryByCode } from "../services/countryService.js";

const router = Router();

// weather only
router.get("/weather", async (req, res, next) => {
  try {
    const city = String(req.query.city || "").trim();
    if (!city) return res.status(400).json({ error: "city query is required" });

    const weather = await getWeatherByCity(city);
    res.json(weather);
  } catch (e) {
    next(e);
  }
});

// news about city
router.get("/news", async (req, res, next) => {
  try {
    const q = String(req.query.q || "").trim();
    if (!q) return res.status(400).json({ error: "q query is required" });

    const news = await getNewsByQuery(q);
    res.json(news);
  } catch (e) {
    next(e);
  }
});

//  country details by code
router.get("/country", async (req, res, next) => {
  try {
    const code = String(req.query.code || "").trim();
    if (!code) return res.status(400).json({ error: "code query is required" });

    const country = await getCountryByCode(code);
    res.json(country);
  } catch (e) {
    next(e);
  }
});

// One endpoint that frontend uses
router.get("/summary", async (req, res, next) => {
  try {
    const city = String(req.query.city || "").trim();
    if (!city) return res.status(400).json({ error: "city query is required" });

    const weather = await getWeatherByCity(city);

    // Use country code from weather
    const country = weather?.countryCode
      ? await getCountryByCode(weather.countryCode)
      : null;

    // News about the city
    const news = await getNewsByQuery(city);

    res.json({ weather, country, news });
  } catch (e) {
    next(e);
  }
});

export default router;
