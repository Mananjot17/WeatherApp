import React from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import SearchBar from "../components/SearchBar";
import ErrorDisplay from "../components/ErrorDisplay";
import { Cloud } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <Cloud className="text-blue-500 w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Weather App</h1>
          <p className="text-gray-600">Check the weather in your city</p>
        </div>

        <SearchBar />
        <div className="mt-6">
          <ErrorDisplay />
        </div>
        <div className="mt-6">
          <WeatherDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
