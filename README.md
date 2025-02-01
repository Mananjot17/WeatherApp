# Weather App

A simple weather application built with **React**, **Vite**, and **React Query** to fetch real-time weather data. It allows users to search for a city, view current weather details, and switch between Celsius and Fahrenheit. The UI is enhanced with **Framer Motion** for smooth animations.

## Features
- **Real-time weather data** using an external API
- **City search functionality** with persistent state
- **Temperature unit toggle** (Celsius/Fahrenheit)
- **Automatic data refetching** every 30 seconds
- **Smooth animations** with Framer Motion
- **Error handling** for invalid city names
- **Dummy data for forecast**, as the free API provides only a one-day forecast
- **Context API for global state management**

## Tech Stack
- **React + Vite** - Frontend framework and bundler
- **React Query** - Data fetching and caching
- **Framer Motion** - UI animations
- **LocalStorage** - Persisting the last searched city
- **Context API** - Managing global state for weather data and city selection

## Project Structure
```
/weather-app
├── src
│   ├── api
│   │   ├── weatherApi.js      # Fetches weather data from API
│   ├── components
│   │   ├── SearchBar.jsx      # Input field for searching cities
│   │   ├── WeatherDisplay.jsx # Displays current weather details
│   │   ├── Forcast.jsx        # Displays dummy forecast data
│   │   ├── ErrorMessage.jsx   # Shows error messages
│   ├── context
│   │   ├── WeatherContext.js  # Manages global weather state using Context API
│   ├── pages
│   │   ├── WeatherApp.jsx     # Main app component
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
├── public
├── package.json
├── vite.config.js
└── README.md
```

## Installation & Running the Project

### Prerequisites
Ensure you have **Node.js** and **npm** or **yarn** installed.

### Steps to Run the App
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Start the development server**
   ```sh
   npm run dev  # or yarn dev
   ```

4. **Open in browser**
   The app will be running at `http://localhost:5173/` (or another port if specified).

## API Information
- **Endpoint**: The app fetches weather data from an external API.
- **Limitations**: The free tier provides only a **one-day forecast**, so I used dummy data to simulate a multi-day forecast.

## How It Works
1. **WeatherContext** (using Context API) stores the selected city and manages API data globally.
2. The API fetch is handled using **React Query** with caching and automatic refetching every 30 seconds.
3. **SearchBar** allows users to enter a city name, which updates the global context.
4. **WeatherDisplay** shows the current weather, using **unit conversion** based on user preference.
5. **Forcast** displays forecast data using **dummy data** (can be replaced with real data if available).
6. **Error handling** ensures invalid city names are handled properly, showing an error message immediately.

## Future Enhancements
- Integrate a **premium API** to fetch a real multi-day forecast
- Add **user preferences storage** for temperature unit and theme
- Improve UI with more detailed weather animations

## License
This project is open-source and available under the [MIT License](LICENSE).

---
Made with ❤️ using React & Vite

