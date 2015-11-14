'use strict';

var url = require('url');


var Place = require('./PlaceService');


module.exports.placeAddNewPlacePost = function placeAddNewPlacePost (req, res, next) {
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  var images = req.swagger.params['images'].value;
  var userId = req.swagger.params['user_id'].value;
  

  var result = Place.placeAddNewPlacePost(name, description, images, userId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.placeGetPlacesDetailsGet = function placeGetPlacesDetailsGet (req, res, next) {
  var lastUpdate = req.swagger.params['last_update'].value;
  

  var result = Place.placeGetPlacesDetailsGet(lastUpdate);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.placeGetPlacesListGet = function placeGetPlacesListGet (req, res, next) {
  var lastUpdate = req.swagger.params['last_update'].value;
  

  var result = Place.placeGetPlacesListGet(lastUpdate);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.placeRatePlacePost = function placeRatePlacePost (req, res, next) {
  var placeId = req.swagger.params['place_id'].value;
  var userId = req.swagger.params['user_id'].value;
  var vote = req.swagger.params['vote'].value;
  

  var result = Place.placeRatePlacePost(placeId, userId, vote);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.placeReportPlacePost = function placeReportPlacePost (req, res, next) {
  var placeId = req.swagger.params['place_id'].value;
  var userId = req.swagger.params['user_id'].value;
  var reason = req.swagger.params['reason'].value;
  

  var result = Place.placeReportPlacePost(placeId, userId, reason);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
