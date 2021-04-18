'use strict';

var response =require('./res');
var connection =require('./koneksi');

exports.index = function(){
    response.ok("Aplikasi rest api ku berjalan")
};