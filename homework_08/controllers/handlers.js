const express = require("express");
const app = express();
const fs = require("fs");
const path = "./data/storage.json";
const bodyParser = require("body-parser");

app.use(bodyParser.json());


exports.post = (req, res) => {
    fs.readFile(path, (error, data) => {
        if(error) res.status(404).send("Cannot proceed");
        let parsedData = JSON.parse(data);

        let check = req.body.id && req.body.name && req.body.band && req.body.instrument;
        if (!check) res.status(400).send("Cannot proceed");
        let ifExists = parsedData.find( item => {
            return req.body.name == item.name &&
                    req.body.band == item.band &&
                    req.body.instrument == item.instrument;
        });
        if (ifExists) res.status(409).send("Resource already exists");
        const rockstar = {
            id: parsedData.length + 1,
            name: req.body.name,
            band: req.body.band,
            instrument: req.body.instrument
        };
        parsedData.push(rockstar);
        res.status(201).send("Element added");
    })
}

exports.getById = (req, res) => {
    fs.readFile(path, (error, data) => {
        if (error) res.status(404).send("Musician has been not found");
        let parsedData = JSON.parse(data);
        let rockstar = parsedData.find(item => item.id === parseInt(req.params.id));
        return (rockstar) ? res.status(200).send(rockstar) : res.status(404).send("Musician has been not found");
    })
}

exports.get = (req, res) => {
    fs.readFile(path, (error, data) => {
        if (error) res.status(404).send("Musicians has been not found");
        let parsedData = JSON.parse(data);
        res.status(200).send(parsedData)
    })
}

exports.put = (req, res) => {
    fs.readFile(path, (error, data) => {
        if(error) res.status(404).send("Musician not found");
        let parsedData = JSON.parse(data);
        let rockstar = parsedData.find(item => item.id === parseInt(req.params.id));
        rockstar.name = (rockstar.name == req.body.name) ? rockstar.name : req.body.name;
        rockstar.band = (rockstar.band == req.body.band) ? rockstar.band : req.body.band;
        rockstar.instrument = (rockstar.instrument == req.body.band) ? rockstar.instrument : req.body.instrument;
        fs.writeFile(path, JSON.stringify(parsedData), err => {
            if (error) throw error;
            res.status(200).send("Updated");
        })
    })    
}

exports.delete = (req, res) => {
    fs.readFile(path, (error, data) => {
        if (error) res.status(404).send("Musician not found");
        let parsedData = JSON.parse(data);
        let target = parsedData.find(item => item.id === parseInt(req.params.id));
        if ((req.params.id > parsedData.length) || !target) return res.status(404).send("Musician not found");
        let index = parsedData.indexOf(target);
        parsedData.splice(index, 1);
        fs.writeFile(path, JSON.stringify(parsedData), error => {
            if (error) throw error;
            res.status(200).send("Musician has been successfully removed");
        })
    })
}