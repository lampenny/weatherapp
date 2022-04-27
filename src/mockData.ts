export const currentDataMock = {
    coord: { lon: 139.6917, lat: 35.6895 },
    weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
    ],
    base: "stations",
    main: {
        temp: 24.22,
        feels_like: 24.58,
        temp_min: 22.59,
        temp_max: 25.58,
        pressure: 1007,
        humidity: 72,
    },
    visibility: 10000,
    wind: { speed: 5.14, deg: 180 },
    clouds: { all: 75 },
    dt: 1651046851,
    sys: {
        type: 2,
        id: 2038398,
        country: "JP",
        sunrise: 1651002852,
        sunset: 1651051405,
    },
    timezone: 32400,
    id: 1850144,
    name: "Tokyo",
    cod: 200,
};

export const futureDataMock = {
    lat: 0,
    lon: 0,
    timezone: "Etc/GMT",
    timezone_offset: 0,
    current: {
        dt: 1651047160,
        sunrise: 1651038846,
        sunset: 1651082456,
        temp: 28.01,
        feels_like: 31.52,
        pressure: 1011,
        humidity: 76,
        dew_point: 23.38,
        uvi: 0.88,
        clouds: 100,
        visibility: 10000,
        wind_speed: 5.3,
        wind_deg: 191,
        wind_gust: 6,
        weather: [
            { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
        ],
    },
    daily: [
        {
            dt: 1651057200,
            sunrise: 1651038846,
            sunset: 1651082456,
            moonrise: 1651029720,
            moonset: 1651074180,
            moon_phase: 0.89,
            temp: {
                day: 27.92,
                min: 26.95,
                max: 28.05,
                night: 27.55,
                eve: 27.79,
                morn: 27.91,
            },
            feels_like: { day: 31.46, night: 30.63, eve: 30.9, morn: 31.58 },
            pressure: 1010,
            humidity: 77,
            dew_point: 23.51,
            wind_speed: 7.72,
            wind_deg: 165,
            wind_gust: 7.81,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 100,
            pop: 0.6,
            rain: 2.58,
            uvi: 8.59,
        },
        {
            dt: 1651143600,
            sunrise: 1651125237,
            sunset: 1651168848,
            moonrise: 1651118760,
            moonset: 1651163160,
            moon_phase: 0.92,
            temp: {
                day: 27.89,
                min: 27.57,
                max: 28.07,
                night: 27.66,
                eve: 28.02,
                morn: 27.7,
            },
            feels_like: { day: 30.46, night: 30.5, eve: 30.57, morn: 30.1 },
            pressure: 1011,
            humidity: 70,
            dew_point: 22.01,
            wind_speed: 5.82,
            wind_deg: 131,
            wind_gust: 6.2,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 97,
            pop: 0.56,
            rain: 0.25,
            uvi: 11.37,
        },
        {
            dt: 1651230000,
            sunrise: 1651211629,
            sunset: 1651255241,
            moonrise: 1651207740,
            moonset: 1651252200,
            moon_phase: 0.96,
            temp: {
                day: 27.61,
                min: 27.15,
                max: 27.92,
                night: 27.92,
                eve: 27.83,
                morn: 27.35,
            },
            feels_like: { day: 30.64, night: 31.32, eve: 31.26, morn: 30.2 },
            pressure: 1012,
            humidity: 76,
            dew_point: 23.05,
            wind_speed: 7.08,
            wind_deg: 163,
            wind_gust: 7.01,
            weather: [
                { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
            ],
            clouds: 100,
            pop: 0.64,
            rain: 4.13,
            uvi: 13.06,
        },
        {
            dt: 1651316400,
            sunrise: 1651298022,
            sunset: 1651341634,
            moonrise: 1651296780,
            moonset: 1651341240,
            moon_phase: 0,
            temp: {
                day: 27.97,
                min: 27.71,
                max: 28.1,
                night: 27.92,
                eve: 28.08,
                morn: 27.83,
            },
            feels_like: { day: 30.87, night: 31.61, eve: 31.83, morn: 30.85 },
            pressure: 1012,
            humidity: 72,
            dew_point: 22.48,
            wind_speed: 7.95,
            wind_deg: 171,
            wind_gust: 8,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 100,
            pop: 0.6,
            rain: 0.82,
            uvi: 12.81,
        },
        {
            dt: 1651402800,
            sunrise: 1651384415,
            sunset: 1651428027,
            moonrise: 1651385820,
            moonset: 1651430280,
            moon_phase: 0.02,
            temp: {
                day: 28.05,
                min: 27.65,
                max: 28.22,
                night: 28.08,
                eve: 28.22,
                morn: 27.65,
            },
            feels_like: { day: 31.91, night: 31.68, eve: 32, morn: 30.85 },
            pressure: 1013,
            humidity: 78,
            dew_point: 23.75,
            wind_speed: 4.74,
            wind_deg: 114,
            wind_gust: 5.12,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 56,
            pop: 0.72,
            rain: 1.2,
            uvi: 12.44,
        },
        {
            dt: 1651489200,
            sunrise: 1651470808,
            sunset: 1651514422,
            moonrise: 1651474980,
            moonset: 1651519500,
            moon_phase: 0.05,
            temp: {
                day: 28.19,
                min: 27.58,
                max: 28.4,
                night: 28.2,
                eve: 28.4,
                morn: 27.88,
            },
            feels_like: { day: 31.93, night: 31.65, eve: 31.93, morn: 31.37 },
            pressure: 1012,
            humidity: 76,
            dew_point: 23.52,
            wind_speed: 4.6,
            wind_deg: 172,
            wind_gust: 4.91,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 37,
            pop: 0.92,
            rain: 1.88,
            uvi: 13,
        },
        {
            dt: 1651575600,
            sunrise: 1651557202,
            sunset: 1651600816,
            moonrise: 1651564260,
            moonset: 1651608840,
            moon_phase: 0.08,
            temp: {
                day: 28,
                min: 27.7,
                max: 28.14,
                night: 27.95,
                eve: 28.14,
                morn: 27.7,
            },
            feels_like: { day: 32.1, night: 31.68, eve: 31.82, morn: 31.09 },
            pressure: 1011,
            humidity: 80,
            dew_point: 24.25,
            wind_speed: 4.96,
            wind_deg: 121,
            wind_gust: 5.31,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 9,
            pop: 0.52,
            rain: 0.32,
            uvi: 13,
        },
        {
            dt: 1651662000,
            sunrise: 1651643597,
            sunset: 1651687212,
            moonrise: 1651653600,
            moonset: 1651698240,
            moon_phase: 0.11,
            temp: {
                day: 28.25,
                min: 27.87,
                max: 28.35,
                night: 28.05,
                eve: 28.15,
                morn: 27.87,
            },
            feels_like: { day: 32.07, night: 31.76, eve: 31.84, morn: 31.78 },
            pressure: 1011,
            humidity: 76,
            dew_point: 23.65,
            wind_speed: 5.37,
            wind_deg: 163,
            wind_gust: 5.61,
            weather: [
                { id: 500, main: "Rain", description: "light rain", icon: "10d" },
            ],
            clouds: 23,
            pop: 1,
            rain: 2.57,
            uvi: 13,
        },
    ],
};
