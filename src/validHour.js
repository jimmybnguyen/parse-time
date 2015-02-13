'use strict';

var validNumber = require('./validNumber')

module.exports = function validHour(value, config){
	var meridian = config && config.meridian

	if (validNumber(value, config)){
		value *= 1

		if (meridian){
			return 0 <= value && value <= 12
		}

		return 0 <= value && value < 24
	}

	return false
}