const functions = require("firebase-functions");
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors({
  origin: '*'
}));

var client_id = 'V2GN2xAuS9M0GlYD_jIR';
var client_secret = 'xOitg25izi';

app.get('', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/search/news?sort=sim&display=5&query=' + encodeURI('윤이나'); // json 결과
  var request = require('request');
  var options = {
      url: api_url,
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
   };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

exports.apicall = functions.https.onRequest(app);