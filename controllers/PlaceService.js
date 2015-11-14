'use strict';

exports.placeAddNewPlacePost = function(name, description, images, userId) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.placeGetPlacesDetailsGet = function(lastUpdate) {

  var examples = {};
  
  examples['application/json'] = {
  "images" : [ {
    "orginal_url" : "aeiou",
    "id" : 1.3579000000000001069366817318950779736042022705078125,
    "thumbnail_url" : "aeiou",
    "place_id" : 1.3579000000000001069366817318950779736042022705078125,
    "upload_date" : "aeiou"
  } ],
  "reviews" : [ {
    "date" : "aeiou",
    "user_id" : 1.3579000000000001069366817318950779736042022705078125,
    "photo" : "aeiou",
    "id" : 1.3579000000000001069366817318950779736042022705078125,
    "text" : "aeiou",
    "video" : "aeiou",
    "place_id" : 1.3579000000000001069366817318950779736042022705078125,
    "status" : "aeiou"
  } ],
  "name" : "aeiou",
  "vote_number" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 1.3579000000000001069366817318950779736042022705078125
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.placeGetPlacesListGet = function(lastUpdate) {

  var examples = {};
  
  examples['application/json'] = [ {
  "images" : [ {
    "orginal_url" : "aeiou",
    "id" : 1.3579000000000001069366817318950779736042022705078125,
    "thumbnail_url" : "aeiou",
    "place_id" : 1.3579000000000001069366817318950779736042022705078125,
    "upload_date" : "aeiou"
  } ],
  "reviews" : [ {
    "date" : "aeiou",
    "user_id" : 1.3579000000000001069366817318950779736042022705078125,
    "photo" : "aeiou",
    "id" : 1.3579000000000001069366817318950779736042022705078125,
    "text" : "aeiou",
    "video" : "aeiou",
    "place_id" : 1.3579000000000001069366817318950779736042022705078125,
    "status" : "aeiou"
  } ],
  "name" : "aeiou",
  "vote_number" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.placeRatePlacePost = function(placeId, userId, vote) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.placeReportPlacePost = function(placeId, userId, reason) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
