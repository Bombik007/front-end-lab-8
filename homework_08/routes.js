const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const handlers = require('./controllers/handlers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.post("/api/rockstar", handlers.post);
app.get("/api/rockstar/:id", handlers.getById);
app.get("/api/rockstar", handlers.get);
app.put("/api/rockstar/:id", handlers.put);
app.put("/api/rockstar/:id", handlers.delete);
module.exports = router;