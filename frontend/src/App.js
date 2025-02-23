import { useState } from "react";
import { getWeather } from "./services/weatherService";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        if (!city) return;
        const data = await getWeather(city);
        setWeather(data);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">Weather App</h1>
            <input 
                type="text" 
                placeholder="Enter city" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                className="p-2 rounded-lg border border-blue-400 mb-4"
            />
            <button 
                onClick={fetchWeather} 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
                Get Weather
            </button>

            {weather && (
                <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-semibold">{weather.name}</h2>
                    <p className="text-gray-700">{weather.weather[0].description}</p>
                    <p className="text-lg font-medium">Temperature: {weather.main.temp}°C</p>
                </div>
            )}
        </div>
    );
}

export default App;
