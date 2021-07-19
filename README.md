# CleverFarm frontend homework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Assignment

Create simple web application for overview of farm sensors using **React**.
You can find mocked information about these sensor in enclosed json.
Each sensor contains `id`, `name`, `description` and `coordinates`.

User wants to see overview of sensors in one page, and their detail with location on map on another page. Overview should contain cards with sensor name, description and button linking to its detail.
It should be responsive, so use full-width layout on smaller viewports and multi-column on larger viewports.

Sensor detail should contain button linking back to overview, sensor name and coordinates of the sensor.
Under these information, try to create map with use of [OpenLayers](https://openlayers.org/). Map should be zoomed to location and ideally displaying sensor location as a dot.

Try to use [Material-UI](https://material-ui.com/) components and its styling solution to get best result. Use git to source control and publish your application in public git repository. Optionally, think about ways to load these information through REST API and how to save them in application state.