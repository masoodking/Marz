'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.userActivatePost = function userActivatePost (req, res, next) {
  var phoneNumber = req.swagger.params['phone_number'].value;
  var activationCode = req.swagger.params['activation_code'].value;
  

  var result = User.userActivatePost(phoneNumber, activationCode);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.userGetProfileGet = function userGetProfileGet (req, res, next) {
  var phoneNumber = req.swagger.params['phone_number'].value;
  var password = req.swagger.params['password'].value;
  

  var result = User.userGetProfileGet(phoneNumber, password);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.userResendActivationCodePost = function userResendActivationCodePost (req, res, next) {
  var phoneNumber = req.swagger.params['phone_number'].value;
  

  var result = User.userResendActivationCodePost(phoneNumber);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.userSetProfilePost = function userSetProfilePost (req, res, next) {
  var fullName = req.swagger.params['full_name'].value;
  var picture = req.swagger.params['picture'].value;
  var username = req.swagger.params['username'].value;
  var phoneNumber = req.swagger.params['phone_number'].value;
  var password = req.swagger.params['password'].value;
  

  var result = User.userSetProfilePost(fullName, picture, username, phoneNumber, password);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.userSigninPost = function userSigninPost (req, res, next) {
  var phoneNumber = req.swagger.params['phone_number'].value;
  var password = req.swagger.params['password'].value;
  

  var result = User.userSigninPost(phoneNumber, password);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.userSignupPost = function userSignupPost (req, res, next) {
  var phoneNumber = req.swagger.params['phone_number'].value;
  var password = req.swagger.params['password'].value;
  

  var result = User.userSignupPost(phoneNumber, password);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
