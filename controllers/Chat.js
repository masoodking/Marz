'use strict';

var url = require('url');


var Chat = require('./ChatService');


module.exports.chatGetChatListGet = function chatGetChatListGet (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var lastUpdate = req.swagger.params['last_update'].value;
  

  var result = Chat.chatGetChatListGet(userId, lastUpdate);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.chatGetUserChatGet = function chatGetUserChatGet (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var lastUpdate = req.swagger.params['last_update'].value;
  

  var result = Chat.chatGetUserChatGet(userId, lastUpdate);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.chatSendMessagePost = function chatSendMessagePost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var roomId = req.swagger.params['room_id'].value;
  var photo = req.swagger.params['photo'].value;
  var video = req.swagger.params['video'].value;
  var text = req.swagger.params['text'].value;
  

  var result = Chat.chatSendMessagePost(userId, roomId, photo, video, text);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.chatStartChatOnAPlacePost = function chatStartChatOnAPlacePost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var plcaeId = req.swagger.params['plcae_id'].value;
  var users = req.swagger.params['users'].value;
  

  var result = Chat.chatStartChatOnAPlacePost(userId, plcaeId, users);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendAddUserToRoomPost = function friendAddUserToRoomPost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var targetId = req.swagger.params['target_id'].value;
  var roomId = req.swagger.params['room_id'].value;
  

  var result = Chat.friendAddUserToRoomPost(userId, targetId, roomId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
