import axios from "axios";

class WeatherApiError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "WeatherApiError";
    this.code = code; // Custom property for error code
  }
}

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `http://api.weatherstack.com/forecast?access_key=bc45ab8dd71c58de6d8ac33b71d94bd1&query=${city}`
    );

    if (response.data.error) {
      throw new WeatherApiError(
        response.data.error.info,
        response.data.error.code
      );
    }
    return response.data;
  } catch (error) {
    if (error instanceof WeatherApiError) {
      throw error; // Preserve custom error
    } else {
      throw new WeatherApiError(
        "Failed to fetch weather data. Please try again.",
        500
      );
    }
  }
};
