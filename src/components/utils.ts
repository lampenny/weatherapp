import { initialValues } from "../initialValues";

export const weatherMapping = (weather: string) => {
    switch (weather) {
        case "Clear":
            return "🌞";
        case "Clouds":
            return "☁️";
        case "Rain":
            return "🌧";
        case "Snow":
            return "❄️";
        case "Thunderstorm":
            return "⛈";
        case "Lightning":
            return "⚡️";
        case "Wind":
            return "🌬";
        default:
            return "⛅";
    }
};
