import { createContext, useState, useEffect, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weatherApi";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState(
    localStorage.getItem("lastCity") || "Mumbai"
  );

  const { data, error, refetch } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    refetchInterval: 30000,
    refetchIntervalInBackground: true,
    enabled: !!city,
    retry: false,
  });

  useEffect(() => {
    localStorage.setItem("lastCity", city);
  }, [city]);

  return (
    <WeatherContext.Provider value={{ data, error, city, setCity, refetch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
