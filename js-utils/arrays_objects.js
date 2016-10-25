'use strict';

/**
 * Checks if 2 arrays contain common elements. Useful for checking adding an element only if non of the elements on a list
 * are already present
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {Array} srcArray  Array to be tested. 
 * @param  {Array} testArray Array to be tested against. 
 * @return {boolean}           Wether there were any matches.
 */
export function arrayContains(srcArray, testArray) {
	let result = false;
	testArray.forEach(value => {
		if(srcArray.includes(value)) {
			result = true;
		}
	});
	return result;
}

/**
 * Simple wrapper for the oneliner that maps an object's property values to an array (kinda like a poor man's Object.values)
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {Object} object Object to be mapped
 * @return {Array}        Array consisting of the object's property values.
 */
export function mapValues(object) {
	return Object.keys(object).map(key => object[key]);
}

/**
 * Wrapper around the oneliner that maps an object's key value pairs to an array with key value pairs as elements. (Poor man's Object.entries)
 * @author Daniel Bolívar <daniel.bolivar@icloud.com>
 * @param  {Object} object Object to be mapped
 * @return {Array}        Array consisting of the object's key value pairs. 
 */
export function mapPairs(object) {
	return Object.keys(object).map(key => [key, object[key]]);
}