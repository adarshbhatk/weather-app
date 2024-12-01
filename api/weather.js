export default async function handler(req, res) {
    const { city } = req.query; // Get city name from query parameters
    const apiKey = process.env.OPENWEATHER_API_KEY; // Securely access API key from environment variables
  
    if (!city) {
      res.status(400).json({ message: "City name is required" });
      return;
    }
  
    try {
      // Build the OpenWeatherMap API URL
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      
      // Fetch data from OpenWeatherMap
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (!response.ok) {
        res.status(response.status).json({ message: data.message || "Error fetching weather data" });
        return;
      }
  
      // Send the weather data back to the frontend
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching weather data", error: error.message });
    }
  }
  