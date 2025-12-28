const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const statusBox = document.getElementById("status");
const weatherBox = document.getElementById("weatherBox");
const countryBox = document.getElementById("countryBox");
const newsBox = document.getElementById("newsBox");

function setStatus(msg) {
  statusBox.textContent = msg || "";
}

function kvRows(obj) {
  return `
    <div class="kv">
      ${obj
        .map(
          ([k, v]) => `
        <div class="k">${k}</div>
        <div>${v}</div>
      `
        )
        .join("")}
    </div>
  `;
}

function safe(v, fallback = "N/A") {
  if (v === null || v === undefined) return fallback;
  const s = String(v);
  return s.length ? s : fallback;
}

async function loadCity(city) {
  setStatus("Loading...");
  weatherBox.innerHTML = "";
  countryBox.innerHTML = "";
  newsBox.innerHTML = "";

  const res = await fetch(`/api/summary?city=${encodeURIComponent(city)}`);
  const data = await res.json();
  if (!res.ok) {
    setStatus(data?.error || "Request failed");
    return;
  }

  const w = data.weather;
  weatherBox.innerHTML = kvRows([
    ["City", safe(w.cityName)],
    ["Temperature (°C)", safe(w.temperature)],
    ["Feels like (°C)", safe(w.feelsLike)],
    ["Description", safe(w.description)],
    [
      "Coordinates",
      w.coordinates ? `${w.coordinates.lat}, ${w.coordinates.lon}` : "N/A",
    ],
    ["Wind speed", safe(w.windSpeed)],
    ["Country code", safe(w.countryCode)],
    ["Rain last 3h (mm)", safe(w.rainVolumeLast3h, "0")],
  ]);

  const c = data.country;
  if (c) {
    const curr = (c.currencies || [])
      .map((x) => `${x.code} (${safe(x.name)}) ${safe(x.symbol, "")}`.trim())
      .join(", ");

    countryBox.innerHTML = kvRows([
      ["Code", safe(c.code)],
      ["Name", safe(c.name)],
      ["Region", safe(c.region)],
      ["Currencies", safe(curr, "N/A")],
    ]);
  } else {
    countryBox.textContent = "No country info.";
  }

  const items = data.news?.articles || [];
  if (!items.length) {
    newsBox.textContent = "No news found.";
  } else {
    newsBox.innerHTML = items
      .map(
        (a) => `
      <div class="newsItem">
        <div><a href="${a.url}" target="_blank" rel="noreferrer">${
          a.title
        }</a></div>
        <div class="small">${safe(a.source)} • ${safe(a.publishedAt)}</div>
      </div>
    `
      )
      .join("");
  }

  setStatus("");
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return setStatus("Enter a city name.");
  loadCity(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

loadCity("Astana");
