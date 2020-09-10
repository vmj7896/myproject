const express = require('express');
const bodyParse = require('body-parse');
const path = require('path');
const http = require('http');
const app = express();

//parses
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false}));

// React build output folder
app.use(express.static (path.join(_dirname, 'build')))

//send all other requests to the React app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})

const port = process.env.PORT || '3046';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
