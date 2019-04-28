//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let unordered = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

let ordered = unordered.sort((num1, num2) => {
    return num1 - num2
});

function sortingArrays(arr) {
    let finalArray = [];
    let tempArray = []
    ordered.forEach((num, index) => {
        if (num === ordered[index + 1]) {
            tempArray.push(num);
        } else if (num === ordered[index - 1]) {
            tempArray.push(num);
            finalArray.push(tempArray);
            tempArray = [];
        } else {
            finalArray.push(num);
        }
    });

    return finalArray;
}

sortingArrays(ordered);