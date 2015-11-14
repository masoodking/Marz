'use strict';

exports.chatGetChatListGet = function(userId, lastUpdate) {

  var examples = {};
  
  examples['application/json'] = [ {
  "room_id" : 1.3579000000000001069366817318950779736042022705078125,
  "date" : "aeiou",
  "photo" : "aeiou",
  "id" : "aeiou",
  "text" : "aeiou",
  "video" : "aeiou",
  "sender_id" : 1.3579000000000001069366817318950779736042022705078125,
  "seen" : true
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.chatGetUserChatGet = function(userId, lastUpdate) {

  var examples = {};
  
  examples['application/json'] = [ {
  "room_id" : 1.3579000000000001069366817318950779736042022705078125,
  "date" : "aeiou",
  "photo" : "aeiou",
  "id" : "aeiou",
  "text" : "aeiou",
  "video" : "aeiou",
  "sender_id" : 1.3579000000000001069366817318950779736042022705078125,
  "seen" : true
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.chatSendMessagePost = function(userId, roomId, photo, video, text) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.chatStartChatOnAPlacePost = function(userId, plcaeId, users) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.friendAddUserToRoomPost = function(userId, targetId, roomId) {

  var examples = {};
  
  examples['application/json'] = {
  "code" : 123,
  "message" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
