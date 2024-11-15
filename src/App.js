import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import City from './components/City';

function App() {
  const [city, setCity] = useState({
    name: '',
    temp: '',
    condition: '',
    isSet: false,
  });

  const apiKey = 'e3fe0229f98158a27b24c54610ee785a';

  useEffect(() => {
    if (city.name) {
      
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}&units=metric`
          );
          const data = await response.json();

          if (data.cod === 200) {
            const countryCode = data.sys.country;
            setCity({
              name: `${data.name}, ${countryCode}`,
              temp: Math.round(data.main.temp),
              condition: data.weather[0].main,
              isSet: true,
            });
          } else {
            console.error("City not found or API error", data.message);
          }
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeatherData();
    }
  }, [city.name, apiKey]); 

  const setBackgroundColor = (condition) => {
    let color;
    switch (condition) {
      case 'Clear':
        color = '#FFD700';
        break;
      case 'Clouds':
        color = '#B0BEC5';
        break;
      case 'Rain':
        color = '#607D8B';
        break;
      case 'Snow':
        color = '#ECEFF1';
        break;
      default:
        color = 'lightblue'; 
        break;
    }
    return color;
  };

  const setCityName = (name) => {
    setCity((prevCity) => ({
      ...prevCity, 
      name: name,
      isSet: false, 
    }));
  };

  return (
    <div className="container" style={{ backgroundColor: setBackgroundColor(city.condition) }}>
      <Header onSet={setCityName} />
      <City city={city} isSet={city.isSet}/>
    </div>
  );
}

export default App;
