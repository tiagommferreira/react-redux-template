import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import config from './config'

let app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('superSecret', config.secret);

app.use((req, res, next) => {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/posts', (request, response) => {
    response.send([{_id: 1, title: "First post title", content: "First post content"}, {_id: 2, title: "Second post title", content: "Second post content"}]);
});

app.all('/api/*', (request, response) => {
    response.send({
        error: "No such API method"
    });
});

app.get('*', (request, response) => {
    response.sendFile(path.resolve('index.html'));
});

app.listen(app.get('port'), () => {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});