import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import MongoClient from 'mongodb';
import bodyParser from 'body-parser';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get("/restaurantsData", function(req, res) {
  console.log("received GET request for restaurants");
  MongoClient.connect("mongodb://localhost:27017/haliFoodie", function(err, db) {
    if(err) {
      res.send({error: "could not connect to database"});
      return console.log(err);
    }

    const collection = db.collection("restaurants");
    let restaurants = [];
    let stream = collection.find().stream();
    stream.on("data", function(restaurant) {
      restaurants.push(restaurant);
    });
    stream.on("end", function(restaurant) {
      res.send(restaurants);
    });
  });
});

app.get('*', function(req, res) {
  console.log('inside generic get');
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

app.post("/restaurantsData", function(req, res) {
  console.log("received POST request to / restaurantsData");

  const restaurant = req.body.restaurant;
  console.log("restaurant is: ");
  console.log(restaurant);
  MongoClient.connect("mongodb://localhost:27017/haliFoodie", function(err, db) {
  if(err) {
    res.send({error: "could not connect to database"});
    console.log(err);
  }

  console.log('about to attempt to insert new restaurant!');
  let collection = db.collection("restaurants");

  collection.insert(restaurant, function(err, result) {
    if(err) {
      res.json({result: "failed", error: err});
      return console.log(err);
    }

    res.send(restaurant);
    });
  });
});
