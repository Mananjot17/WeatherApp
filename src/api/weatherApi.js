import axios from "axios";

export const fetchWeather = async ({ city }) => {
  try {
    const response = await axios.get(
      `http://api.weatherstack.com/forecast?access_key=bc45ab8dd71c58de6d8ac33b71d94bd1&query=${city}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};
