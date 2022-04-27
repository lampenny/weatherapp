import { rest } from "msw";
import { setupServer } from "msw/node";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { currentDataMock, futureDataMock } from "../mockData";

//tell msw to intercept requests
const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
});

// react-leaflet mock
jest.mock("react-leaflet", () => ({
  MapContainer: jest.fn(),
  TileLayer: jest.fn(),
  Marker: jest.fn(),
  useMap: jest.fn(),
}));

describe("render the application", () => {
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather`;
  const futureUrl = `https://api.openweathermap.org/data/2.5/onecall`;

  beforeEach(() => {
    server.use(
      rest.get(currentUrl, async (_res, res, ctx) => {
        return res(ctx.json(currentDataMock));
      })
    );
    server.use(
      rest.get(futureUrl, async (_res, res, ctx) => {
        return res(ctx.json(futureDataMock));
      })
    );
    render(<App />);
  });

  test("renders the application", async () => {
    //get search bar element
    const input = screen.getByTestId("search-bar");

    // assert that the title is rendered and has correct title
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent("Daily Weather");

    // assert that the search bar is rendered and has correct placeholder
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter a location");

    // type in the searchbar
    userEvent.type(input, "london");

    //simulate the enter key
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    // wait for the data to be loaded, expect weather data to be rendered
    expect(await screen.findByTestId("weather-forecast")).toBeInTheDocument();
    expect(screen.getByTestId("location")).toHaveTextContent("Tokyo");
    expect(screen.getByTestId("wind-container")).toHaveTextContent("Wind");
    expect(screen.getByTestId("humidity-container")).toHaveTextContent(
      "Humidity"
    );

    // assert that the map is rendered
    expect(screen.getByTestId("map-container")).toBeInTheDocument();

    // assert that the seven day forecast is rendered
    expect(screen.getByTestId("weekly-forecast-container")).toBeInTheDocument();
    expect(screen.getByTestId("weekly-forecast-title")).toHaveTextContent(
      "Weekly forecast"
    );
  });
});
