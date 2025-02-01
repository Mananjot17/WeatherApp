import axios from "axios";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};
