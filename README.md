# Rafa's Cavestany landing page.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

```
git clone https://github.com/RafaCavestany/landing.git
cd landing/
npm install
```

## Getting Started

### `npm start` && `npm run watch-css`

First of all, to have our app up and running perfectly, we need to run
both of those commands at the same time. Explained here:

### `npm run watch-css`
Simply watches
[index.scss](https://github.com/RafaCavestany/landing/blob/master/src/css/index.scss)
to build the `index.css` file required by [index.js](https://github.com/RafaCavestany/landing/blob/master/src/index.js)
(development only)

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

<img src='https://camo.githubusercontent.com/41678b3254cf583d3186c365528553c7ada53c6e/687474703a2f2f692e696d6775722e636f6d2f466e4c566677362e706e67' width='600' alt='Build errors'>

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

Your app is ready to be deployed.
