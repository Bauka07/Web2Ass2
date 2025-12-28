# Weather Dashboard — Backend API Integration

## 1. Project Description

This project is a backend-focused web application built with Node.js and Express.js.
It retrieves real-time weather data from external APIs on the server side, processes the data,
and displays the results in a simple and responsive web interface.

All third-party API communication is handled strictly on the backend to ensure security,
protect API keys, and follow proper backend architecture principles.

---

## 2. Setup Instructions

### 2.1 Clone the Repository

git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

### 2.2 Install Dependencies

npm install

### 2.3 Environment Variables

Create a file named `.env` in the root directory of the project and add the following variables:

PORT=3000
OPENWEATHER_API_KEY=your_openweather_api_key
NEWS_API_KEY=your_newsapi_key

The `.env` file is excluded from GitHub using `.gitignore`.

### 2.4 Run the Application

Development mode:

npm run dev

Production mode:

npm start

Open in browser:

http://localhost:3000

---

## 3. File Structure

```text
weather-dashboard/
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
```

---

## 4. API Routes Overview

- GET /api/health
- GET /api/weather?city=CityName
- GET /api/news?q=CityName
- GET /api/country?code=CountryCode
- GET /api/summary?city=CityName

---

## 5. API Usage Details

### 5.1 Weather API

GET /api/weather?city=Astana

Returns temperature, feels-like temperature, description, coordinates,
wind speed, country code, and rain volume for the last 3 hours.

### 5.2 News API

GET /api/news?q=Astana

Returns recent news articles related to the city.

### 5.3 Country API

GET /api/country?code=KZ

Returns country name, region, and currency.

### 5.4 Combined API

GET /api/summary?city=Astana

Returns weather, news, and country data in one response.

---

## 6. Key Design Decisions

- Server-side API calls only
- Environment variables for secrets
- Service-based architecture
- In-memory caching
- Clean separation of frontend and backend logic

---

## 7. Screenshots

### 7.1 Web Interface

<img width="1472" height="902" alt="image" src="https://github.com/user-attachments/assets/e161d7a9-67f6-4f50-90a5-77e43f6e603e" />

### 7.2 API Testing

<img width="1279" height="829" alt="image" src="https://github.com/user-attachments/assets/39c4cf98-828a-4531-8d48-cc9bb730b3bd" />
<img width="1281" height="905" alt="image" src="https://github.com/user-attachments/assets/6ffdbe7f-5949-4f04-9428-881d4f4dcd06" />
<img width="1317" height="867" alt="image" src="https://github.com/user-attachments/assets/31aaf77f-b46d-4cdf-b46a-8bd2ecfd351d" />
<img width="1293" height="873" alt="image" src="https://github.com/user-attachments/assets/3a53a56e-2793-4bf5-b3a5-c7d850b92dc3" />



---

## 8. Technologies Used

- Node.js
- Express.js
- Axios
- dotenv
- Nodemon
- OpenWeather API
- NewsAPI
- REST Countries API
- HTML, CSS, JavaScript
