# Weather Dashboard — Backend API Integration

## 📌 Project Description
This project is a backend-focused web application built with Node.js and Express.js.
It retrieves real-time weather data from external APIs on the server side, processes it,
and displays the results in a simple and responsive web interface.

All third-party API communication is handled on the backend to ensure security and
proper application architecture.

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
2. Install dependencies
bash
Копировать код
npm install
3. Environment variables
Create a .env file in the project root and add the following variables:

env
Копировать код
PORT=3000
OPENWEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_newsapi_key
The .env file is excluded from GitHub using .gitignore to protect sensitive data.

4. Run the project
Development mode:

bash
Копировать код
npm run dev
Production mode:

bash
Копировать код
npm start
Open the application in your browser:

arduino
Копировать код
http://localhost:3000
🔌 API Usage Details
Weather API (Core Requirement)
Endpoint:

bash
Копировать код
GET /api/weather?city=Astana
The server retrieves real-time weather data from the OpenWeather API and returns the
following information:

Temperature

Feels-like temperature

Weather description

Geographic coordinates (latitude and longitude)

Wind speed

Country code

Rain volume for the last 3 hours

Additional APIs
News API
Endpoint:

bash
Копировать код
GET /api/news?q=Astana
This endpoint retrieves recent news related to the selected city using the NewsAPI.

Country Information API
Endpoint:

bash
Копировать код
GET /api/country?code=KZ
This endpoint retrieves country details such as name, region, and currency using the
REST Countries API.

Combined API Endpoint
Endpoint:

pgsql
Копировать код
GET /api/summary?city=Astana
This endpoint combines weather data, news, and country information into a single
response and is used by the frontend application.

🧠 Key Design Decisions
All external API requests are handled strictly on the server side to prevent exposure
of API keys.

Environment variables are used to store sensitive configuration data securely.

The project uses a service-based architecture where each API is handled in a separate
service file.

Simple in-memory caching is implemented to reduce unnecessary API requests and improve
performance.

Frontend logic is separated from HTML and implemented in public/app.js to keep the
code clean and maintainable.

📸 Screenshots
Web Interface
Insert a screenshot of the running web application here.

API Testing (Postman or Browser)
Insert a screenshot showing the JSON response from:

bash
Копировать код
/api/summary?city=Astana
🧾 Technologies Used
Node.js

Express.js

Axios

dotenv

Nodemon

OpenWeather API

NewsAPI

REST Countries API

HTML, CSS, JavaScript

yaml
Копировать код

---

## ✅ This README fully satisfies:
✔ Setup instructions  
✔ API usage details  
✔ Key design decisions  
✔ Screenshot section  

If you want next:
- 🎓 Defense Q&A
- 📸 Screenshot guidance
- 🔍 Final repo review  

Just tell me 👍
