'use strict';

var url = require('url');


var Friend = require('./FriendService');


module.exports.friendAnswerFriendRequestPost = function friendAnswerFriendRequestPost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var requestId = req.swagger.params['request_id'].value;
  var answer = req.swagger.params['answer'].value;
  

  var result = Friend.friendAnswerFriendRequestPost(userId, requestId, answer);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendBlockUserPost = function friendBlockUserPost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var targetId = req.swagger.params['target_id'].value;
  

  var result = Friend.friendBlockUserPost(userId, targetId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendGetFriendsListGet = function friendGetFriendsListGet (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  

  var result = Friend.friendGetFriendsListGet(userId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendGetUserStatusGet = function friendGetUserStatusGet (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var targetId = req.swagger.params['target_id'].value;
  

  var result = Friend.friendGetUserStatusGet(userId, targetId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendSearchUserGet = function friendSearchUserGet (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var query = req.swagger.params['query'].value;
  

  var result = Friend.friendSearchUserGet(userId, query);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.friendSendFriendRequestPost = function friendSendFriendRequestPost (req, res, next) {
  var userId = req.swagger.params['user_id'].value;
  var targetId = req.swagger.params['target_id'].value;
  

  var result = Friend.friendSendFriendRequestPost(userId, targetId);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
