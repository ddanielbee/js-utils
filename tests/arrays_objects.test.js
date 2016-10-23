'use strict';
import * as utils from '../js-utils/arrays_objects';

it('should return true since array1 and array2 both contain cats, and return false after since array2 and array3 dont have an element in common', () => {
	let array1 = ['cats', 'dogs'],
			array2 = ['cows', 'cats'],
			array3 = ['aligators', 'polar bears'];
	expect(utils.arrayContains(array1, array2)).toBe(true);
	expect(utils.arrayContains(array2, array3)).toBe(false);
});