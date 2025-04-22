async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const display = document.getElementById('weatherDisplay');
  
    error.textContent = '';
    display.innerHTML = '';
    loading.style.display = 'block';
  
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();
  
      if (response.ok) {
        display.innerHTML = `
          <div class="weather-card">
            <h2>${data.city}</h2>
            <img src="${data.icon}" alt="Weather icon" />
            <p>${data.description}</p>
            <p>Temp: ${data.temperature}</p>
            <p>Humidity: ${data.humidity}</p>
          </div>
        `;
      } else {
        error.textContent = data.error;
      }
    } catch (err) {
      error.textContent = "An error occurred.";
    }
  
    loading.style.display = 'none';
  }