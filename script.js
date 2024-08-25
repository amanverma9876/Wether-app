document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '22628683258db8096d67db340d6b8c572'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2628683258db8096d67db340d6b8c572&units=metric`;
;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>City not found.</p>`;
        });
});
