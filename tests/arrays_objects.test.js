'use strict';
import * as utils from '../js-utils/arrays_objects';

test('checks if 2 arrays contain common elements', () => {
	let array1 = ['cats', 'dogs'],
			array2 = ['cows', 'cats'],
			array3 = ['aligators', 'polar bears'];
	expect(utils.arrayContains(array1, array2)).toBe(true);
	expect(utils.arrayContains(array2, array3)).toBe(false);
});

test('returns an array of the property values in an object', () => {
	let object = {name: 'Fluffykins', species: 'cat'},
			endArray = ['Fluffykins', 'cat'];
	expect(utils.mapValues(object)).toEqual(endArray);
});

test('returns an array of the key value pairs in an object', () => {
	let object = {name: 'Fluffykins', species: 'cat'},
			endArray = [['name', 'Fluffykins'], ['species', 'cat']];
	expect(utils.mapPairs(object)).toEqual(endArray);
});

test('returns an object with the elements in one array as property names and the elements in the other array as property values', () => {
	let array1 = ['name', 'species'],
			array2 = ['Fluffykins', 'cat'],
			endObject = {name: 'Fluffykins', species: 'cat'};
	expect(utils.mapArrays(array1, array2)).toEqual(endObject);
});

test('returns the object with the biggest value on the given property among an array of objects of the same kind', () => {
	let objectArray = [
		{
			name: 'Milo',
			score: 42
		},
		{
			name: 'Fluff',
			score: 30
		},
		{
			name: 'Dndt',
			score: 56
		}
	],
		expectedWinner = {name: 'Dndt', score: 56};
	expect(utils.getWinner(objectArray)).toEqual(expectedWinner);
});