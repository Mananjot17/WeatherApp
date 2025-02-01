import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaSun, FaTint, FaWind } from "react-icons/fa";

const WeatherDisplay = ({ convertTemp, unit }) => {
  const [weather, setWeather] = useState({
    temp: 33,
    humidity: 67,
    windSpeed: 4,
    condition: "Partly Cloudy",
    forecast: [
      { day: "Tue", temp: 31, condition: "Snowy" },
      { day: "Wed", temp: 30, condition: "Cloudy" },
      { day: "Thu", temp: 33, condition: "Cloudy" },
      { day: "Fri", temp: 32, condition: "Rainy" },
      { day: "Sat", temp: 33, condition: "Sunny" },
      { day: "Sun", temp: 31, condition: "Snowy" },
    ],
  });
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FaSun className="text-5xl md:text-7xl" />
      <p className="text-lg md:text-xl mt-2">WEATHER</p>
      <p className="text-4xl md:text-6xl font-bold">
        {convertTemp(weather.temp)}°{unit}
      </p>
      <p className="text-md md:text-lg">Monday 16th</p>
      <div className="flex gap-2 md:gap-4 mt-2 text-sm md:text-lg">
        <p>
          <FaWind className="inline text-gray-200" /> {weather.windSpeed} mph
        </p>
        <p>
          <FaTint className="inline text-blue-200" /> {weather.humidity}%
        </p>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;
