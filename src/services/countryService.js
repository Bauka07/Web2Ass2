import axios from "axios";
import { cached } from "../utils/cache.js";

export async function getCountryByCode(code) {
  const normalized = String(code).trim().toUpperCase();
  const cacheKey = `country:${normalized}`;

  return cached(
    cacheKey,
    async () => {
      const url = `https://restcountries.com/v3.1/alpha/${normalized}`;
      const { data } = await axios.get(url, { timeout: 10_000 });

      const c = Array.isArray(data) ? data[0] : data;
      const name = c?.name?.common ?? normalized;
      const region = c?.region ?? null;

      const currenciesObj = c?.currencies || {};
      const currencies = Object.entries(currenciesObj).map(([code, info]) => ({
        code,
        name: info?.name ?? null,
        symbol: info?.symbol ?? null,
      }));

      return { code: normalized, name, region, currencies };
    },
    24 * 60 * 60_000
  );
}
