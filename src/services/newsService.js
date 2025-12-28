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

export async function getNewsByQuery(q) {
  const apiKey = requireEnv("NEWS_API_KEY");

  const cacheKey = `news:${q.toLowerCase()}`;
  return cached(
    cacheKey,
    async () => {
      const url = "https://newsapi.org/v2/everything";
      const { data } = await axios.get(url, {
        params: {
          q,
          pageSize: 5,
          sortBy: "publishedAt",
          language: "en",
          apiKey,
        },
        timeout: 10_000,
      });

      const articles = (data?.articles || []).map((a) => ({
        title: a?.title ?? "Untitled",
        source: a?.source?.name ?? "Unknown",
        publishedAt: a?.publishedAt ?? null,
        url: a?.url ?? null,
      }));

      return {
        query: q,
        totalResults: data?.totalResults ?? articles.length,
        articles,
      };
    },
    120_000
  );
}
