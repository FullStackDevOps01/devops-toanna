'use strict';

var express = require('express');
var app = express();

var config = require('config');
var logger = require('./helpers/logger');

var server = app.listen(config.get('server.port'), config.get('server.host'), function(){
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', host, port);
});

app.get('/hello', function(req, res){
    res.send(JSON.stringify({
        'hello': 'world'
    }));
});