// import React, { useState, useEffect } from 'react';

// const WeatherComponent = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const lat = 40.7128; // example latitude
//   const lon = -74.0060; // example longitude
//   const apiKey = 'AIzaSyDCNppYHct4Rt48Ljf9GPh3FpCqN-vP6v4'; // Replace 'YOUR_API_KEY' with your actual API key

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   return (
//     <div>
//       {weatherData ? (
//         <div>
//           <h2>Weather for {weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           {/* You can display other weather data properties as needed */}
//         </div>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// };

// export default WeatherComponent;
