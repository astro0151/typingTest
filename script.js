let inputText = [
  "hello this is Gulbahar Ali and i am creating a typing test app",
  "this project is for practice concepts of javascript",
  "this keyword for me was very confusing but now i am clear with this keyword he he he he",
  "do more practice with projects and become pro in coding like me yeah",
  "i have mention all the comments in js code and explained all about the steps",
  "do you know how difficult to handle when you miss someone very hard while sitting alone funny right but what when actually someone do not know about your feelings that you love even hate you lol",
  "no matter what was you for someone. everything get changes with time why not people.people hardly can wait for you but chances are very less",
];
let msg = document.getElementById("msg");
let typedWords = document.getElementById("mywords"); //access input textarea
let btn = document.getElementById("btn");
// console.log(btn);

let startTime, endTime; //capturing time taken

let typingStart = () => {
  let randomNumber = Math.floor(Math.random() * inputText.length); // random number for getting random text from array
  msg.innerText = inputText[randomNumber]; // display any random text from array
  let dateObject = new Date(); // capture time
  startTime = dateObject.getTime(); // start time captured
  btn.innerText = "Done";
};

let typingEnd = () => {
  let dateObject = new Date(); //capture time taken

  endTime = dateObject.getTime(); // time captured

  let takenTime = (endTime - startTime) / 1000; //captured time always in milliseconds
  console.log(takenTime);
  let totalTypedWords = typedWords.value; //got typed words as string

  let wordCount = wordCounter(totalTypedWords); // calling function here :-function hoisting here and argument is string typed

  let speedCount = Math.round((wordCount / takenTime) * 60); // words per minute
  console.log(speedCount);
  let resultMessage = "you typed: " + speedCount + "w/m. ";

  resultMessage += compareWords(msg.innerText, totalTypedWords); //calling function ,hoisting
  msg.innerText = resultMessage;
};

// word counter function

let wordCounter = (string) => {
  let response = string.split(" ").length; //typed string converted into array and then arr.length by words
  console.log(response);
  return response;
};

// compare function for wrong and correct words
let compareWords = (str1, str2) => {
  let word1 = str1.split(" "); //array with random text message for typing test
  let word2 = str2.split(" "); // array with total typed words
  let correctTyped = 0;
  word1.forEach((itemValue, itemIndex) => {
    if (itemValue == word2[itemIndex]) {
      correctTyped++;
    }
  });

  let errWords = word1.length - correctTyped;
  return (
    "correct " +
    correctTyped +
    " words out of " +
    word1.length +
    ". and worng words typed is: " +
    errWords
  );
};

// button event

btn.addEventListener("click", function () {
  // console.log("i guess clicked");
  // console.log(this);
  if (this.innerText == "Start typing") {
    // it will get trigger when starts
    typedWords.disabled = false;
    typingStart();
    //  console.log("typing started");
  } else if (this.innerText == "Done") {
    // when ends typeing
    typedWords.disabled = true;
    btn.innerText = "Start typing";
    typingEnd();
    typedWords.value = "";
    // console.log("result success");
  }
});
