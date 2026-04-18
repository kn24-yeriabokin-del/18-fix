import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  // Викликаємо API при завантаженні сторінки
  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather();
      setWeather(data);
    };
    getWeather();
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>🏙️ Моє місто: Київ</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Київ — столиця України та одне з найстаріших міст Європи. 
        Це місто неймовірної архітектури, каштанів, а і ще якись текст якийй мені ліньки придумувати  .
      </p>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f8ff', borderRadius: '10px', display: 'inline-block' }}>
        <h3>🌤️ Поточна погода (API Дані)</h3>
        {weather ? (
          <div>
            <p><strong>Температура:</strong> {weather.temperature} °C</p>
            <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
            <p><em>(Дані оновлено щойно)</em></p>
          </div>
        ) : (
          <p style={{ color: 'blue' }}>Завантаження погоди...</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;