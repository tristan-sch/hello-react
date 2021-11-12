# hello-react

This project my assignment for Module 4:

- Go to the [guide](https://io.tskoli.dev/guides/5f1335b8b279dc27c467cae5)
- Go to the [live demo](https://tristan-sch.github.io/hello-react/)

## What did I do?

I created a simple Weather App. For this I used these APIs:

- [getAvailableStations](https://apis.is/weather/getAvailableStations)
- [observations](https://apis.is/weather/observations/en?stations=1)

### `Here are the steps I followed:`

1. Choosing the station/city with a select dropdown
2. Passing the id of the selected city into the "observations" API like so `http://apis.is/weather/observations/en?stations=${id}`
3. Displaying some of the data from the API

## Notes

- I had trouble passing the ID of the selected city into the "observations" API and asked Smári for help
- I'm using 2 different mehtods to fetch the APIs -> with Axios and with FETCH
- I realise that I should be using hooks instead of Class Components
- I did not put any effort into styling

## Resources

- [How to build and deploy a React app to Github pages](https://medium.com/mobile-web-dev/how-to-build-and-deploy-a-react-app-to-github-pages-in-less-than-5-minutes-d6c4ffd30f14)
- [React select dropdown tutorial using react-select.](https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3)
- [Iterate Through a JSON Response in JSX Render for React](https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs)
- [Icelandic Weather API](http://docs.apis.is/#endpoint-weather)
