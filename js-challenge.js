//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let unordered = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

let ordered = unordered.sort((num1, num2) => {return num1 - num2});

let finalArray = [];

let tempArray = []

ordered.forEach((num, index) => {
	if (num === ordered[index + 1]){
		tempArray.push(num);
	} else if(num === ordered [index - 1]){
		tempArray.push(num);
		finalArray.push(tempArray);
		tempArray = [];
	} else {
		finalArray.push(num);
	}
	return finalArray;
});
		





//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]

//https://github.com/firattale/JavaScript/blob/master/ArrayFunctions/Andrew's%20Questions/A2.js

//https://github.com/jaxxeh/challenge-6/blob/master/question2.js




// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.

//https://github.com/firattale/JavaScript/blob/master/ArrayFunctions/Andrew's%20Questions/A3.js
//https://github.com/kboeff/coding-challenge-6/blob/master/Q3.js