export const login = async (id) => {
    let result = null;
    try {
        await localStorage.setItem("id", id);
        result = await localStorage.getItem("id");
    } catch (error) {
        throw new Error(error.message);
    }

    return result;
};

export const logout = async () => {
    await removeItem("id");
    return true;
};

export const getTodolist = async (id) => {
    let prev = await getItem(id);
    if (!prev) return [];
    return JSON.parse(prev);
};

export const getItem = async (key) => {
    return await localStorage.getItem(key);
};

export const setItem = async (key, value) => {
    await localStorage.setItem(key, value);
    return true;
};

export const removeItem = async (key) => {
    await localStorage.removeItem(key);
};

export const getQuotes = async () => {
    try {
        return await fetch("./data/quotes.json").then((res) => {
            if (!res.ok) {
                throw new Exception("quotes load failure");
            }
            return res.json();
        });
    } catch (error) {
        console.error(error.message);
    }
};

const apiKey = "a37e8d62bfb4b3175cdcbe0431b8ca5c";
export const getWeather = async () => {
    const { coords } = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject),
    );
    const lati = coords.latitude;
    const longi = coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`;
    try {
        return await fetch(url).then((res) => {
            if (!res.ok) {
                throw new Exception("weather load failure");
            }
            return res.json();
        });
    } catch (error) {
        console.error(error.message);
    }
};
export const getFakeWeather = async () => {
    // name: Daejeon, weather[0].main: Cloud, main.temp: 28.1
    return await {
        name: "Daejeon",
        weather: [{ main: "Cloud" }],
        main: {
            temp: 28.1,
        },
    };
};
