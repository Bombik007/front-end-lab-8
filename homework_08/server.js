const express = require('express');
const app = express();
const db = require('./routes');
const port = process.env.PORT || 3000;
app.use('/', db);
app.listen(port);