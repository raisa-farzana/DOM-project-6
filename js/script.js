const getWeather = () => {

    const city = document.getElementById('cityInput').value;
    const apiKey = '3468a68ae69b3cf3e5055fe1232e6444';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');

        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;

        weatherInfo.innerHTML = `
            <p> Description: ${description} </p>
            <h4> Temperature: ${temperature} </h4>
            <p> Humidity: ${humidity} </p>
            <p> wind Speed: ${wind} </p>

        `;
    })
}