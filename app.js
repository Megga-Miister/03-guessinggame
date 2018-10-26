"use strict";

// username welcome question
var userName = prompt("Please enter your name.");
alert("Hi, " + userName + ". I'm Meggan, thank you for visiting my portfolio." );

alert("Please respond to the following questions with Y/y/yes/YES or N/n/NO/no...");

var totalScore = 0;

//asking question one and directing alert response based off the yes/no answer
function question1(){
  var responseOne = prompt ("Do I like spicy food?") .toUpperCase();
  if (responseOne === "Y" || responseOne === "YES") {
    alert ("Correct! I love spicy food.");
    totalScore++;
    } else if (responseOne === "N" || responseOne === "NO") {
    alert ("Nope. I actually love spicy food.")
  };
  // console log for to show question with user answer
  console.log("Question 1: Do I like spicy food? User answer: ", responseOne);
}
question1();

//asking question two and directing alert response based off the yes/no answer
function question2(){
  var responseTwo = prompt ("Do I like country music?") .toUpperCase();
  if (responseTwo === "N" || responseTwo === "NO") {
    alert ("Correct! I loathe country music. Sorry if you like it.");
    totalScore++;
    } else if (responseTwo === "Y" || responseTwo === "YES") {
    alert ("Sorry, I don't like country music.")
  };
  // console log for to show question with user answer
  console.log("Question 2: Do I like country music? User answer: ", responseTwo);
}
question2();

//asking question three and directing alert response based off the yes/no answer
function question3(){
  var responseThree = prompt ("Have I met Jeff Bezos?") .toUpperCase();
  if (responseThree === "Y" || responseThree === "YES") {
    alert ("You are right. I met him at a reading event at the EMP, now MOPOP, while I was in elementary school.");
    totalScore++;
    } else if (responseThree === "N" || responseThree === "NO") {
    alert ("Surprisingly, I actually met him at a reading event that was held at the EMP (now MOPOP), while I was in elementary school.")
  };
  // console log for to show question with user answer
  console.log("Question 3: Have I met Jeff Bezos? User answer: ", responseThree);
}
question3();

//asking question four and directing alert response based off the yes/no answer
function question4(){
  var responseFour = prompt ("Was I born in America?") .toUpperCase();
  if (responseFour === "N" || responseFour === "NO") {
    alert ("You're right. I was born in Kaohsiung, Taiwan.");
    totalScore++;
    } else if (responseFour === "Y" || responseFour === "YES") {
    alert ("Actually I was born in Kaohsiung, Taiwan.")
  };
  // console log for to show question with user answer
  console.log("Question 4: Was I born in America? User answer: ", responseFour);
}
question4();

//asking question five and directing alert response based off the yes/no answer
function question5(){
  var responseFive = prompt ("Do I have a dog?") .toUpperCase();
  if (responseFive === "Y" || responseFive === "YES") {
    alert ("I do have a dog. In fact I have two!");
    totalScore++;
    } else if (responseFive === "N" || responseFive === "NO") {
    alert ("You are kind of correct. I don't have a dog, I have two.")
  };
  // console log for to show question with user answer
  console.log("Question 5: Do I have a dog? User answer: ", responseFive);
}
question5();

//asking question six and directing user to too high or too low prompts, user allowed four answer attempts
function question6(){
  var responseSix = parseInt (prompt ("Can you guess how many times I have been to Disneyland?"));
  var counterQ6 = 0;

  //create counter in while loop so user can only attempt answer four times
  while (responseSix !== 2 && counterQ6 < 3) {
    counterQ6++;
    if (responseSix > 2) {
      responseSix = parseInt (prompt("That is actually more times then I've gone. Guess again."));
    } else {
      responseSix = parseInt (prompt("I've actually been there more times. Try guessing again."));
    }
  }
  //correct answer for question 6 and alert for user to read
  if (responseSix === 2 ) {
    alert ("That is correct! I went once at the age of 7 and more recently at 26.");
    totalScore++;
  }
}
question6();

//asking question seven and comparing user answer to array, if correct break loop, if incorrect only allow six attempts
function question7(){
var question7Answers = ["CANADA", "TAIWAN", "JAPAN", "THAILAND"];
var responseSeven = prompt ("Besides America, can you name a country I've traveled to?") .toUpperCase();
var answerStatus = false;
var counterQ7 = 0;

while (counterQ7 < 5 && answerStatus === false) {
  for (var arrayID = 0; arrayID < question7Answers.length; arrayID++) {
    if (responseSeven === question7Answers[arrayID]) {
      answerStatus = true;
    }
  }
    if (answerStatus) {
      alert("That is correct! I've been to Canada, Taiwan, Japan and Thailand." );
      totalScore++;
    } else {
      responseSeven = prompt ("That is incorrect. Please try again.") .toUpperCase();
      counterQ7++;
    }
  }
}
question7();

//user score message
alert (userName + ", you got " + totalScore + " out of 7 questions correct." )
