'use strict';

exports.friendAnswerFriendRequestPost = function(userId, requestId, answer) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendBlockUserPost = function(userId, targetId) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendGetFriendsListGet = function(userId) {

  var examples = {};
  
  examples['application/json'] = [ {
  "password" : "aeiou",
  "phone_number" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "avatar" : "aeiou",
  "username" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendGetUserStatusGet = function(userId, targetId) {

  var examples = {};
  
  examples['application/json'] = {
  "password" : "aeiou",
  "phone_number" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "avatar" : "aeiou",
  "username" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendSearchUserGet = function(userId, query) {

  var examples = {};
  
  examples['application/json'] = [ {
  "password" : "aeiou",
  "phone_number" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : "aeiou",
  "avatar" : "aeiou",
  "username" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendSendFriendRequestPost = function(userId, targetId) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
