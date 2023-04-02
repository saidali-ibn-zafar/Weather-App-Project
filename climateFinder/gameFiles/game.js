const controlBtns = document.querySelectorAll(".controlBtns"),
  answerBtns = document.querySelector(".answerDiv"),
  temperature = document.getElementById("temp"),
  nextBtn = document.getElementById("nextBtn"),
  userAnswer = document.getElementById("answer");

let temperatureBox = [];
let firstTemp = Math.round(Math.random() * 20);
temperature.innerHTML = firstTemp;

let i = 0;
nextBtn.addEventListener("click", function () {
  i++;
  if (i < 4) {
    let randomTemp = Math.floor(Math.random() * 20);
    temperature.innerHTML = randomTemp;
    temperatureBox.push(randomTemp);
    // console.log(randomTemp);
  }

  // ELSE
  else {
    controlBtns.forEach((button) => {
      button.style.display = "none";
    });
    answerBtns.style.display = "grid";
    document.querySelector(".text").style.display = "flex";

    // getting the sum of temperatures
    let sum = 0;
    for (let i = 0; i < temperatureBox.length; i++) {
      sum += temperatureBox[i];
    }
    sum += firstTemp; //adding also the first temperature

    // here will be one correct answer and then random incorrect answers as well
    let answersBox = [];
    for (let i = 1; i < 4; i++) {
      let randAnswer = Math.floor(Math.random() * 50);
      answersBox.push(randAnswer);
    }
    answersBox.push(sum); // here we are pushing the correct answer also to the random incorrect answers
    // console.log(answersBox); // just i am checking on the console
    for (let i = 1; i <= 4; i++) {
      const randomIndex = Math.floor(Math.random() * answersBox.length);
      const randomElement = answersBox[randomIndex];
      answersBox.splice(randomIndex, 1); // splicing element after using it
      const button = document.getElementById(`btn${i}`);
      button.value = randomElement;
      button.innerHTML = randomElement;
      button.addEventListener("click", function () {
        // if it is correct then some changes ...
        if (parseInt(button.value) === sum) {
          document.getElementById("text").innerText = "Congratulations!!!";
          document.querySelector(".tempInfo").style.display = "none";
          button.style.backgroundColor = "#00FF00";
          document.querySelector(".second").style.display = "flex";
        } else {
            // else it is incorrect then some changes
          document.getElementById("text").innerText = "Incorrect Answer!!!";
          document.querySelector(".tempInfo").style.display = "none";
          button.style.backgroundColor = "#ff0000";
          document.querySelector(".second").style.display = "flex";
        }
      });
    }
  }
});
