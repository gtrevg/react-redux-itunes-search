# react-redux-itunes-search

A frontend application with React for viewing a list of songs and play them. It calls to the [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/).

On the first page we will see a search bar where we will can enter the terms (whether artists, songs, albums, genres ...). The search results will be shown on the same page in table format, showing the song title and artist, and more in detail, the album title, release date, cover thumbnail, song length, genre and price. Besides, it will offer the ability to sort the list for every the field.

Each result will navigate to a second page in which, with a similar design to a music player, will allows us to see the cover detail, basic information about the song and the basic controls to listen it, play and pause, and skip to the previous and next song in the list of search results.

It is a responsive application and uses `@media queries` with a `max-width` of `468px`.

## Who is this project for?

It is a good example of how using these tecnologies:

* [React](https://facebook.github.io/react/)
* [Create-React-App](https://github.com/facebookincubator/create-react-app)
* [React-Router v4.0.0](https://github.com/ReactTraining/react-router)
* React middlewares like: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-freeze](https://github.com/buunguyen/redux-freeze) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
* [Antd Design](https://ant.design/)
* [Jest](https://facebook.github.io/jest/): Obviously with snapshots

## How to install/configure the project?

### Installation

Just:

```
$ git clone https://github.com/aaronplanell/react-redux-itunes-search.git
$ cd react-redux-itunes-search
$ npm install
```

Obviously, the last line can be replaced by:

```
$ yarn install
```

## How to run the project?

For running in development mode just run:

```
$ npm start
```

Or:

```
$ yarn start
```

Automagically the browser will be open with the application.

## How create an optimized production build ?

For creating an optimized production build just run:

```
$ npm run build
```

Or:

```
$ yarn build
```

You will see a message like:

```
yarn run v1.5.1
$ REACT_APP_ENVIROMENT=development react-scripts build
Creating an optimized production build...

  ...bla, bla, bla...

You may serve it with a static server:

  npm run serve -s build
  serve -s build
```

## How to test the project?

Easy... Just.

```
npm run test
```

Or:

```
yarn test
```

You will find all the tests in differents tests folders. They check:

* Action creators
* Reducers
* Every component:
* It renders
* Its snapshot match
* The buttons callbacks

It uses [Jest technology](https://facebook.github.io/jest/) :)

## Contributing

This project uses.

* [React](https://facebook.github.io/react/)
* [Create-React-App](https://github.com/facebookincubator/create-react-app)
* [React-Router v4.0.0](https://github.com/ReactTraining/react-router)
* React middlewares like: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-freeze](https://github.com/buunguyen/redux-freeze) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
* [Antd Design](https://ant.design/)
* [Jest](https://facebook.github.io/jest/)

## Authors

* **Aaron Planell** ( [LinkedIn](https://www.linkedin.com/in/aaronplanell/) )

## License

GPL (GNU GENERAL PUBLIC LICENSE)
