import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import Forcast from "../components/Forcast";
import ErrorMessage from "../components/ErrorMessage";
import { useWeather } from "../context/WeatherContext";

const WeatherApp = () => {
  const [unit, setUnit] = useState("C");
  const toggleUnit = () => setUnit(unit === "C" ? "F" : "C");
  const convertTemp = (temp) => (unit === "C" ? temp : (temp * 9) / 5 + 32);
  const { data, error } = useWeather();
  const errorMessage = error ? error.message : null;
  const errorCode = error ? error.code : null;

  return (
    <motion.div
      className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-gray-500 text-white p-4 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {errorMessage && <ErrorMessage message={errorMessage} code={errorCode} />}
      {data && (
        <>
          {/* Header */}
          <div className="absolute top-5 left-5 md:top-10 md:left-10 ">
            <h2 className="text-xl md:text-3xl font-medium">WeatherApp</h2>
          </div>
          <div className="absolute top-5 right-5 md:top-10 md:right-10">
            <h2 className="text-xl md:text-3xl font-medium">
              {data?.location?.name} <br />
            </h2>
          </div>

          {/* Weather Display */}
          <WeatherDisplay convertTemp={convertTemp} unit={unit} data={data} />

          {/* Forecast */}
          <Forcast convertTemp={convertTemp} unit={unit} />

          {/* Toggle Unit Button */}
          <motion.button
            className=" px-2 md:px-4 py-1 md:py-2 mt-10 bg-white text-black rounded-lg shadow-lg hover:bg-gray-300 text-xs md:text-base"
            onClick={toggleUnit}
            whileHover={{ scale: 1.1 }}
          >
            Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
          </motion.button>

          {/* Search Input */}
        </>
      )}
      <SearchBar />
    </motion.div>
  );
};

export default WeatherApp;
