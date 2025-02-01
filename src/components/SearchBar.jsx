import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [city, setCity] = useState("");

  return (
    <form className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          className="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
