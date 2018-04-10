const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes');
const port = process.env.PORT || 3000;
app.use('/', routes);
app.listen(port);