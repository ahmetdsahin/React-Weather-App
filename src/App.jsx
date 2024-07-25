import "./App.css";
import axios from "axios";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "d74fd4b87d6595e0fbed758fa93ca1c8";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=tr&appid=${API_KEY}`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(apiUrl).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-4 px-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] text-2xl rounded-3xl border border-gray-600 text-gray-500 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-xl"
          placeholder="Konumu Giriniz"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
