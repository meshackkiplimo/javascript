//conditionsl if else
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote.");
}
//conditional switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.");
}
//conditional ternary
let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Leave the umbrella at home";
console.log(action);