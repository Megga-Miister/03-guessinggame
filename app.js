"use strict";

// username welcome question
var userName = prompt("Please enter your name.");
alert("Hi, " + userName + ". I'm Meggan, thank you for visiting my portfolio." );

alert("Please respond to the following questions with Y/y/yes/YES or N/n/NO/no...");

//asking question one and directing alert response based off the yes/no answer
var responseOne = prompt ("Do I like spicy food?") .toUpperCase();
    if (responseOne === "Y" || responseOne === "YES") {
        alert ("Correct! I love spicy food.")
        } else if (responseOne === "N" || responseOne === "NO") {
        alert ("Nope. I actually love spicy food.")
    };
// console log for to show question with user answer
console.log("Question 1: Do I like spicy food? User answer: ", responseOne);

//asking question two and directing alert response based off the yes/no answer
var responseTwo = prompt ("Do I like country music?") .toUpperCase();
    if (responseTwo === "N" || responseTwo === "NO") {
        alert ("Correct! I loathe country music. Sorry if you like it.")
        } else if (responseTwo === "Y" || responseTwo === "YES") {
        alert ("Sorry, I don't like country music.")
    };
// console log for to show question with user answer
console.log("Question 2: Do I like country music? User answer: ", responseTwo);

//asking question three and directing alert response based off the yes/no answer
var responseThree = prompt ("Have I met Jeff Bezos?") .toUpperCase();
    if (responseThree === "Y" || responseThree === "YES") {
        alert ("You are right. I met him at a reading event at the EMP, now MOPOP, while I was in elementary.")
        } else if (responseThree === "N" || responseThree === "NO") {
        alert ("Surprising I actually met him at a reading event at the EMP, now MOPOP, while I was in elementary.")
    };
// console log for to show question with user answer
console.log("Question 3: Have I met Jeff Bezos? User answer: ", responseThree);

//asking question four and directing alert response based off the yes/no answer
var responseFour = prompt ("Was I born in America?") .toUpperCase();
    if (responseFour === "N" || responseFour === "NO") {
        alert ("You're right. I was born in Kaohsiung, Taiwan.")
        } else if (responseFour === "Y" || responseFour === "YES") {
        alert ("Actually I was born in Kaohsiung, Taiwan.")
};
// console log for to show question with user answer
console.log("Question 4: Was I born in America? User answer: ", responseFour);

//asking question five and directing alert response based off the yes/no answer
var responseFive = prompt ("Do I have a dog?") .toUpperCase();
    if (responseFive === "Y" || responseFive === "YES") {
        alert ("I do have a dog. In fact I have two!")
        } else if (responseFive === "N" || responseFive === "NO") {
        alert ("You are kind of correct. I don't have a dog, I have two.")
    };
// console log for to show question with user answer
console.log("Question 5: Do I have a dog? User answer: ", responseFive);
