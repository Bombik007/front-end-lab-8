const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const handlers = require('./controllers/handlers');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.post("/api/rockstar", handlers.post);
router.get("/api/rockstar/:id", handlers.getById);
router.get("/api/rockstar", handlers.get);
router.put("/api/rockstar/:id", handlers.put);
router.delete("/api/rockstar/:id", handlers.delete);
module.exports = router;