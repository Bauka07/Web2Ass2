🌤 Weather Dashboard — Backend API Integration (Express.js)
📌 Project Overview

This project is a backend-focused web application developed using Node.js and Express.js.
It demonstrates server-side API integration, clean backend architecture, and a responsive frontend interface.

The application retrieves real-time weather data from the OpenWeather API, enriches it with news and country information, and displays everything in a simple, user-friendly UI.

⚠️ All third-party API requests are handled strictly on the server side to protect API keys and follow best security practices.

🎯 Assignment Objectives (Covered)

✔ Server-side API integration
✔ Secure usage of API keys with environment variables
✔ Clean project structure
✔ Responsive frontend
✔ Ability to explain backend logic during defense

🚀 Features
🌦 Weather API (Core Requirement)

Fetched from OpenWeather API on the server.

Returned weather data:

Temperature (°C)

Feels-like temperature

Weather description

Geographic coordinates (latitude & longitude)

Wind speed

Country code

Rain volume for the last 3 hours

📰 Additional APIs (Enhancements)
1️⃣ News API

Displays recent news related to the selected city

Uses NewsAPI

Limited to 5 most recent articles

2️⃣ Country Information API

Uses REST Countries API

Fetches country name, region, and currency data

Country code is derived from weather API response

🧠 Architecture & Design Decisions

Server-side only API calls
→ Prevents exposure of API keys
→ Improves security and scalability

Service-based structure

src/
  routes/
  services/
  utils/


Each API has its own service file.

Environment Variables

API keys stored in .env

.env excluded via .gitignore

Caching Layer

Simple in-memory cache to reduce API requests

Improves performance and avoids rate limits

Frontend Logic

All logic in public/app.js

HTML remains clean and presentation-only

📁 Project Structure
weather-dashboard/
│
├── src/
│   ├── server.js
│   ├── routes/
│   │   └── api.js
│   ├── services/
│   │   ├── weatherService.js
│   │   ├── newsService.js
│   │   └── countryService.js
│   └── utils/
│       └── cache.js
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── .env.example
├── .gitignore
├── package.json
└── README.md

⚙️ Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create .env file in root directory:

PORT=3000
OPENWEATHER_API_KEY=your_openweather_key
NEWS_API_KEY=your_newsapi_key


📌 Use .env.example as a reference.

4️⃣ Run Application

Development mode (with nodemon):

npm run dev


Production mode:

npm start


Open browser:

http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/weather?city=Astana	Weather data
GET	/api/news?q=Astana	News articles
GET	/api/country?code=KZ	Country info
GET	/api/summary?city=Astana	Combined response (used by frontend)
🖥 Frontend

Responsive layout using CSS Grid

Mobile-friendly

Data displayed using cards and labeled fields

All requests handled via backend

🛡 Security Practices

API keys stored in environment variables

.env excluded from GitHub via .gitignore

No secrets hardcoded in source code

✅ Postman request to /api/summary?city=Astana

(Add images here in GitHub README)

🎓 Defense Preparation (What to Explain)

Be ready to explain:

Why API calls are server-side only

What HTTP 401 error means

How environment variables work

How caching improves performance

How data flows: UI → backend → external API → backend → UI

🧾 Technologies Used

Node.js

Express.js

Axios

dotenv

Nodemon

OpenWeather API

NewsAPI

REST Countries API

HTML / CSS / JavaScript
