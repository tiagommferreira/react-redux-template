# react-redux-template

This is a ready-to-go client-server application template using React.js and Redux.

## Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)

## Instalation

Simply clone the project to your desired destination folder

```
$ git clone https://github.com/tiagommferreira/react-redux-template.git <destination-folder>
```

and install the required dependencies:

```
$ cd <destination-folder>
$ yarn install
```

## Development

Now that you have everything you need, you're ready to start the development process.
To start the project run `yarn run dev-client`. This command uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to start a hot-reload server that listen to changes in code.
To start the API server, run `yarn run dev-server` that starts the simple Node.js server that listens for changes using [nodemon](https://github.com/remy/nodemon).

The project is then available on [http://localhost:8080/](http://localhost:3000/).

### Folder structure
```
.
├── client                 # Folder for the client-side code
│   ├── actions            # Redux actions
│   ├── components         # Global Reusable Presentational Components
│   ├── reducers           # Redux reducers
│   │   └── index.js       # Main file where the reducers are combined
│   ├── client.js          # Entry point for the client-side, where the routes are specified
│   ├── store.js           # Redux store
├── lib                    # Application Server compiled code
├── server                 # Application Server compiled code
│   ├── config.js          # Server configuration file
│   └── index.js           # Entry point for the server, where the routes are defined
├── .babelrc               # Babel configuration file
├── client.min.js          # Application Client-side compiled code
├── index.html             # Main HTML page container for app
└── webpack.config.js      # Webpack configuration
```

## Deployment

To build and serve your code ready for a production environment run `yarn run start`. This command runs the build scripts for both the client and the server folder using the [Webpack](webpack.config.js) and [Babel](.babelrc) settings and serves the code on port 3000.
The project is then available on [http://localhost:3000/](http://localhost:3000/) 