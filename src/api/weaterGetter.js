const apiKey = "55c50dde0c86eb96eea0c793cfb7650d";

export const getWeatherFromApi = async city => {
    let url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    if (url.status === 404 || city === "") {
        return { wrongRequest: true };
    }
    let result = await url.json();
    let response = parseObject(result);
    return response;
};

function parseObject(res) {
    let obj = {
        weather: {
            city: res.name,
            temp: res.main.temp - 273.16,
            wind: res.wind,
            rain: res.weather[0]
        }
    };
    return obj;
}
