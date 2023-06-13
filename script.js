function getTitleText() {
  let id = Math.floor(Math.random() * 10);
  
  switch(id) {
    case 0:
      return "Keith did what now???";
    case 1:
      return "JB Sr. was a segregationist :(";
    case 2:
      return "Bell is the real backrooms";
    case 3:
      return "Holy Regal!";
    case 4:
      return "Keith is daddy? 🥺";
    case 5:
      return "Nothing happened in Hutch -Admin";
    case 6:
      return "Chip pays himself $300k a year";
    case 7:
      return "Jesus's body is a $5 baguette";
    case 8:
      return "CHIP WANTS YOU FOR CHAPEL";
    case 9:
      return "RIP Communications Dep't";
  }
}

function tabulateTest() {
  let score = 0;
  
  for (let i = 1; i <= 35; i++) {
    let increase = getAnswer("Q" + i);
    
    if (increase == -1) {
      document.getElementById("err").removeAttribute("hidden");
      window.scrollTo(0, 0);
      return;
    }
    score += increase;
  }
  
  window.location.replace("score.html?score=" + (70 - score));
}

function getAnswer(qName) {
  let buttons = document.getElementsByName(qName);
  
  for (i = 0; i < 3; i++) {
    if (buttons[i].checked)
      return parseInt(buttons[i].value);
  }
  
  return -1;
}

function displayScore() {
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let scoreVal = urlParams.get("score");
  
  let score = document.getElementById("score");
  let message = document.getElementById("message");
  let img = document.getElementById("image");
  
  score.innerHTML = "You scored: " + scoreVal;
  
  switch(true) {
    case (scoreVal < 18):
      message.innerHTML = "Oh lord, there is some bona fide bad stuff in " +
      "this test. Get the holy water!";
      img.src="F.png";
      return;
    case (scoreVal < 35):
      message.innerHTML = "There's a lot more you could have done. I'd " +
      "watch behind me for Chips omnipotent watch!";
      img.src="C.png";
      return;
    case (scoreVal < 53):
      message.innerHTML = "You've managed to avoid breaking most of the " +
      "covenant. Smile!";
      img.src="B.png";
      return;
    default:
      message.innerHTML = "You've managed to avoid breaking nearly all of " +
      "the covenant. Nice!";
      img.src="A.png";
      return;
  }
}