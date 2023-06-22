require('rootpath')();
const express = require('express');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
     
// parse application/json
app.use(express.json())
app.use(cookieParser());

const server = http.createServer(app);
// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
//app.use(cors({credentials: true, origin: true}));

app.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" });
    next();
  });

app.use('/accounts', require('./accounts/accounts.controller'));
 
// global error handler
app.use(errorHandler);
const port = process.env.PORT || 7000
server.listen(port, () => { console.log('Server listening on port ' + port); }); 
