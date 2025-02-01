import { motion } from "framer-motion";
import React from "react";
import { FaSun, FaTint, FaWind } from "react-icons/fa";

const WeatherDisplay = ({ convertTemp, unit, data }) => {
  const currentDate = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDay = daysOfWeek[currentDate.getDay()];
  const currentDateFormatted = `${currentDay}, ${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img src={data?.current?.weather_icons[0]} alt="weather icon" />
      <p className="text-lg md:text-xl mt-2">
        {data?.location?.name}, {data?.location?.region},{" "}
        {data?.location?.country}
      </p>
      <p className="text-4xl md:text-6xl font-bold">
        {convertTemp(data?.current?.temperature)}°{unit}
      </p>
      <p className="text-md md:text-lg"> {currentDateFormatted}</p>
      <div className="flex gap-2 md:gap-4 mt-2 text-sm md:text-lg">
        <p>
          <FaWind className="inline text-gray-200" />{" "}
          {data?.current?.wind_speed} mph
        </p>
        <p>
          <FaTint className="inline text-blue-200" /> {data?.current?.humidity}%
        </p>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;
