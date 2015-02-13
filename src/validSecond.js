'use strict';

var validMinute = require('./validMinute')

module.exports = function validSecond(value, config){
	return validMinute(value, config)
}