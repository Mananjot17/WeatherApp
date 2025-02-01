import { motion } from "framer-motion";

import React, { useState } from "react";
import { FaCloudRain, FaSun } from "react-icons/fa";

const Forcast = ({ convertTemp, unit }) => {
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
      className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {weather.forecast.map((day, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center bg-white bg-opacity-20 p-2 md:p-4 rounded-lg shadow-lg w-16 md:w-24"
          whileHover={{ scale: 1.1 }}
        >
          <p className="font-bold text-gray-500 text-xs md:text-base">
            {day.day}
          </p>
          {day.condition === "Sunny" ? (
            <FaSun className="text-yellow-400 text-xl md:text-2xl" />
          ) : (
            <FaCloudRain className="text-blue-400 text-xl md:text-2xl" />
          )}
          <p className="text-sm text-gray-500 md:text-lg font-semibold">
            {convertTemp(day.temp)}°{unit}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Forcast;
