// Your code here
function mapToNegativize(input) {
	let results = [];
	input.forEach((element) => {
		results.push(element * -1);
	});
	return results;
}
function mapToNoChange(input_array) {
	return input_array;
}

function mapToDouble(input_array) {
	let results = [];
	input_array.forEach((element) => {
		results.push(element * 2);
	});
	return results;
}

function mapToSquare(input_array) {
	let results = [];
	input_array.forEach((element) => {
		results.push(element * element);
	});
	return results;
}

function reduceToTotal(input_array, total = 0) {
	input_array.forEach((element) => {
		total += element;
	});
	return total;
}

function reduceToAllTrue(input_array) {
	let result = true;
	input_array.forEach((element) => {
		result && element ? (result = true) : (result = false);
	});
	return result;
}

function reduceToAnyTrue(input_array) {
	let result = false;
	input_array.forEach((element) => {
		if (element) {
			result = true;
		}
	});
	return result;
}
