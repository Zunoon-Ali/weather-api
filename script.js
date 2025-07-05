function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "1495a5c60fd74bee8b672026251306";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then((data) => {
      document.getElementById("weatherResult").classList.remove("hidden");
      document.getElementById("cityName").textContent = `${data.location.name}, ${data.location.country}`;
      document.getElementById("temp").textContent = data.current.temp_c;
      document.getElementById("condition").textContent = data.current.condition.text;
      document.getElementById("humidity").textContent = data.current.humidity;
      document.getElementById("wind").textContent = data.current.wind_kph;
    })
    .catch((err) => {
      alert("Error: " + err.message);
    });
}
