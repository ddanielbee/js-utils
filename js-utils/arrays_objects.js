'use strict';

export function arrayContains(srcArray, testArray) {
	let result = false;
	testArray.forEach(value => {
		if(srcArray.includes(value)) {
			result = true;
		}
	});
	return result;
}