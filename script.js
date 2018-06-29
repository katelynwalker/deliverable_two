var question = "Pick a number, any number!";
var answer = prompt(question);
alert(answer);
console.log(answer);

var total=0;
for (var num=0; num <= answer; num ++) {
    total= total +num; 
}
console.log("The total is: " + total);
//_______Exercise1___________________________

var question = "Pick a number, any number!";
var answer= prompt(question);
alert(answer);
console.log(answer);

var total=0;
for(var num=0; num <= answer; num++){
  total= total + num;
}
console.log("The total is: " + total);

//______Exercise2____________________________

var question = "Do you want to play?"
var answer= prompt(question);
  if (answer === "yes"){
    do {
    var question2 = "Enter a word"
    var getanswer2 = prompt(question2)
    var question3 = "Do you want to play again?"
    var getanswer3 = prompt(question3);
    console.log(getanswer2)
  }
while (getanswer3 === "yes")
  }
  
//_________Exercise3___________________________
  
var question = "Do you want to print your name?"
var answer = prompt(question);
if (answer === "yes") {
  var name = "Print your name";
  var answer2 = prompt(name);
  console.log(answer2)
}
do {
var printagain = "Do you want to print your name again?"
var answer3 = prompt(printagain);
  if (answer3 === "yes"){
    console.log(answer2 += "!")
  }
}
while (answer3 === "yes")


//_________Exercise 4________________________
    
var time = "What time of day is it?"
var question = prompt(time)
  if (question === "morning") {
    console.log("Since it's morning you should be eating breakfast. We suggest eggs and toast.")
  } else if (question === "afternoon") {
    console.log("Since it is afternoon you should be eating lunch. We suggest a salad.")
  }
  else if (question === "evening"){ 
    console.log("Since it is evening you should be eating dinner. We suggest tofu and rice")
  }
  else console.log("Hmmm.... I don't have any suggestions for you.")

