import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useWeather } from "../context/WeatherContext";

const SearchBar = () => {
  const { city, setCity, refetch } = useWeather();

  const [inputCity, setInputCity] = useState("");

  const handleSubmit = () => {
    setCity(inputCity);
  };

  return (
    <motion.div
      className="absolute bottom-5 md:bottom-10 flex items-center justify-between bg-white bg-opacity-20 p-2 md:p-3 rounded-lg text-black w-2/3 md:w-1/3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <form onSubmit={handleSubmit} className="w-full">
        <input
          type="text"
          placeholder="Search city along with state or country"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          className="w-full p-2 bg-transparent focus:outline-none text-gray-500 placeholder-gray-500 text-xs md:text-base"
        />
      </form>
      <FaSearch
        className="text-gray-400 text-xs md:text-lg"
        onClick={refetch}
      />
    </motion.div>
  );
};

export default SearchBar;
