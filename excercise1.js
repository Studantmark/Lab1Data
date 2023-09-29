
// Function accepts a value and returns the value to console log
const Rep = (myValue) => {
    return (myValue);
}
console.log(Rep("Data Representation & Querying"));

//Function accepts two numbers and adds them and outputs to the log
const Num = (num1, num2) => {
    return num1 + num2;
}
Num(1, 4);
console.log(Num(1, 4));
//declaring the array
const ages = [25, 31, 42, 77];
// using the map function on the array
let PartD = ages.map((element) => {
    //getting numbers in the array under 70 and multiplying them by 2
    if (element < 70) {
        return element * 2;
    } else {
        //returning anything not under 70
        return element;
    }
});

console.log(PartD);