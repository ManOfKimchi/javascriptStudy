const apiKey = "a37e8d62bfb4b3175cdcbe0431b8ca5c";
const getWeather = () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      // success
      const lati = coords.latitude;
      const longi = coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`;
      console.log(url);
      fetch(url)
        .then((res) => res.json())
        .then(({ main, name, weather }) => {
          const cityEl = document.querySelector("#weather span:first-child");
          const weatherEl = document.querySelector("#weather span:last-child");
          cityEl.innerText = name;
          weatherEl.innerText = `, ${weather[0].main} / ${main.temp}℃`;
        });
    },
    (e) => {
      // error
      console.error(e);
    }
  );
};
getWeather();

const fakeWeather = (name, wText, degree) => {
  const cityEl = document.querySelector("#weather span:first-child");
  const weatherEl = document.querySelector("#weather span:last-child");
  cityEl.innerText = name;
  weatherEl.innerText = `, ${wText} / ${degree}℃`;
};

//fakeWeather("Daejeon", "Cloud", 30);
