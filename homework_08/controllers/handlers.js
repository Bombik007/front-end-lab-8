const express = require("express");
const app = express();
const database = require("../data/storage.json");
const bodyParser = require("body-parser");
app.use(bodyParser.json());


exports.post = (req, res) => {
    let check = database.find( item => {
        return req.body.name == item.name &&
                req.body.band == item.band &&
                req.body.instrument == item.instrument;
    })

    if (check) res.status(409).send("Resource already exists");

    const rockstar = {
        id: database.length + 1,
        name: req.body.name,
        band: req.body.band,
        instrument: req.body.instrument
    };

    database.push(rockstar);
    res.status(201).send(rockstar);
}

exports.getById = (req, res) => {
    try {
        let rockstar = database.find(item => item.id === parseInt(req.params.id));
        res.status(200).send(rockstar);
    } catch (error) {
        res.status(404).send("Musician has been not found");
    }
}

exports.get = (req, res) => {
    res.status(200).send(database);
}

exports.put = (req, res) => {
    try {
        let rockstar = database.find(item => item.id === parseInt(req.params.id));
        rockstar.name = (rockstar.name == req.body.name) ? rockstar.name : req.body.name;
        rockstar.band = (rockstar.band == req.body.band) ? rockstar.band : req.body.band;
        rockstar.instrument = (rockstar.instrument == req.body.band) ? rockstar.instrument : req.body.instrument;
        res.status(200).send(rockstar);
    } catch (error) {
        res.status(404).send("Musician not found");
    }    
}

exports.delete = (req, res) => {
    try {
        let rockstar = database.find(item => item.id === parseInt(req.params.id));
        let index = database.indexOf(rockstar);
        database.splice(index, 1);
        res.send(rockstar).send("Musician has been successfully removed");
    } catch (error) {
        res.status(404).send("Musician not found");
    }
}