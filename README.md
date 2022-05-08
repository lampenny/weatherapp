### Weather App built using React and TypeScript with TailwindCSS
[demo](https://weatherapp-pl.netlify.app/)

![Screen Shot 2022-04-27 at 22 45 09](https://user-images.githubusercontent.com/79977073/165549822-8d9f0412-c341-46d5-b5d0-445ca479a5b1.png)

### Approach
**Structure**
```
Home
	Search bar
	Weather forecast
	Map
	Weekly forecast
```
 In the `Home` page, there are 2 states, current weather and future weather which is then passed to the children components `Weather Forecast`, `Map` and `Weekly Forecast`. Openweather API is used 

`Weather Forecast` and `Weekly Forecast` uses dayjs library to convert data dates in to readable formats. To access multiple dates for `Weekly Forecast` map() function is used to iterate over the nested date object array and to manipulate the format.

![Screen Shot 2022-04-28 at 0 27 12](https://user-images.githubusercontent.com/79977073/165554627-f0c0d4ac-f661-45f5-aa4c-5d07456919dd.png)

![Screen Shot 2022-04-28 at 0 27 20](https://user-images.githubusercontent.com/79977073/165554644-ee4e2d00-ea5c-452b-844e-d3ace5b6f2a1.png)

### Tests

Integration tests done using react-testing-library with MSW (which mocks the API calls https://mswjs.io/).


**Dependencies**

[Leaflet](https://react-leaflet.js.org/), [dayjs](https://day.js.org/), [axios](https://axios-http.com/docs/intro) and msw.
