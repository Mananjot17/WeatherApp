import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaSun, FaCloudRain, FaWind, FaTint } from "react-icons/fa";

const WeatherApp = () => {
  const [unit, setUnit] = useState("C");
  const [city, setCity] = useState("");
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

  const toggleUnit = () => setUnit(unit === "C" ? "F" : "C");
  const convertTemp = (temp) => (unit === "C" ? temp : (temp * 9) / 5 + 32);

  return (
    <motion.div
      className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-gray-500 text-white p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <div className="absolute top-5 left-5 md:top-10 md:left-10 ">
        <h2 className="text-xl md:text-3xl font-medium">WeatherApp</h2>
      </div>
      <div className="absolute top-5 right-5 md:top-10 md:right-10">
        <h2 className="text-xl md:text-3xl font-medium">
          place <br /> 20:15 pm
        </h2>
      </div>

      {/* Weather Display */}
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

      {/* Forecast */}
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
            <p className="font-bold text-xs md:text-base">{day.day}</p>
            {day.condition === "Sunny" ? (
              <FaSun className="text-yellow-400 text-xl md:text-2xl" />
            ) : (
              <FaCloudRain className="text-blue-400 text-xl md:text-2xl" />
            )}
            <p className="text-sm md:text-lg font-semibold">
              {convertTemp(day.temp)}°{unit}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Toggle Unit Button */}
      <motion.button
        className=" px-2 md:px-4 py-1 md:py-2 mt-10 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 text-xs md:text-base"
        onClick={toggleUnit}
        whileHover={{ scale: 1.1 }}
      >
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </motion.button>

      {/* Search Input */}
      <motion.div
        className="absolute bottom-5 md:bottom-10 flex items-center bg-white bg-opacity-20 p-2 md:p-3 rounded-lg text-black w-2/3 md:w-1/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 text-xs md:text-base"
        />
        <FaSearch className="text-gray-400 text-xs md:text-lg" />
      </motion.div>
    </motion.div>
  );
};

export default WeatherApp;
