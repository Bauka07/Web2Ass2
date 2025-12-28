# Weather Dashboard — Backend API Integration

## 1. Project Description

This project is a backend-focused web application built with Node.js and Express.js.  
It retrieves real-time weather data from external APIs on the server side, processes the data, and displays it in a simple and responsive web interface.

All third-party API communication is handled strictly on the backend to ensure security, protect API keys, and follow proper backend architecture principles.

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

The `.env` file is excluded from GitHub using `.gitignore` to prevent exposing sensitive information such as API keys.

### 2.4 Run the Application

Development mode:

npm run dev

Production mode:

npm start

Open the application in your browser:

http://localhost:3000

---

## 3. API Usage Details

### 3.1 Weather API (Core Requirement)

Endpoint:

GET /api/weather?city=Astana

The server retrieves real-time weather data from the OpenWeather API and returns the following information:

- Temperature  
- Feels-like temperature  
- Weather description  
- Geographic coordinates (latitude and longitude)  
- Wind speed  
- Country code  
- Rain volume for the last 3 hours  

---

### 3.2 Additional APIs

#### 3.2.1 News API

Endpoint:

GET /api/news?q=Astana

This endpoint retrieves recent news articles related to the selected city using the NewsAPI.

#### 3.2.2 Country Information API

Endpoint:

GET /api/country?code=KZ

This endpoint retrieves country details such as country name, region, and currency information using the REST Countries API.

---

### 3.3 Combined API Endpoint

Endpoint:

GET /api/summary?city=Astana

This endpoint combines weather data, news data, and country information into a single JSON response and is used by the frontend application.

---

## 4. Key Design Decisions

- All external API requests are handled strictly on the server side to prevent exposing API keys in the frontend.
- Environment variables are used to store sensitive configuration data securely.
- The project follows a service-based architecture, where each external API is implemented in a separate service file.
- Simple in-memory caching is implemented to reduce unnecessary API requests and improve application performance.
- Frontend logic is separated from HTML and implemented in a dedicated JavaScript file to keep the code clean and maintainable.

---

## 5. Screenshots

### 5.1 Web Interface

Insert a screenshot of the running web application showing weather, news, and country information.

### 5.2 API Testing

Insert a screenshot from Postman or the browser showing the JSON response from:

/api/summary?city=Astana

---

## 6. Technologies Used

- Node.js  
- Express.js  
- Axios  
- dotenv  
- Nodemon  
- OpenWeather API  
- NewsAPI  
- REST Countries API  
- HTML, CSS, JavaScript  
