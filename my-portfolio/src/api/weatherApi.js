export const fetchWeather = async () => {
  try {
    // Координати Києва (Latitude: 50.45, Longitude: 30.52)
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true"
    );
    if (!response.ok) throw new Error("Помилка завантаження погоди");
    
    const data = await response.json();
    return data.current_weather; // Повертаємо лише поточну погоду
  } catch (error) {
    console.error(error);
    return null;
  }
};