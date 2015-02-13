'use strict';

var validNumber = require('./validNumber')

module.exports = function validMinute(value, config){

	if (validNumber(value, config)){
		value *= 1

		return 0 <= value && value < 60
	}

	return false
}