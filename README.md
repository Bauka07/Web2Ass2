# Weather + News + Country Dashboard (Express.js)

## Features

- Server-side weather fetching using OpenWeather Current Weather API
- Returns JSON with required fields:
  - temperature, description, coordinates, feels-like temperature, wind speed,
    country code, rain volume last 3 hours
- Additional server-side APIs:
  1. NewsAPI: shows latest articles about the selected city
  2. REST Countries: shows country details and currency info using weather country code
- Responsive UI (HTML/CSS + public/app.js)

## Tech Stack

- Node.js + Express
- Axios
- dotenv
- Vanilla HTML/CSS/JS

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
