var para = document.getElementById("results");

//The script calls the same function no matter which button is pressed.
// The variable 'button' checks which button was pressed and executes the
//appropriate function.

function pushed() {
  if (button = 0) {
    if (isNaN(boxInput)) {
      para.textContent = "Sorry, you can only do that with numbers."
  } else {
      para.textContent = boxInput + " plus 7 is " + addition(boxInput) + ".";
    }
  } else if (button = 1) {
    para.textContent = "Those numbers equal " + multiply() + " when multiplied together.";
  } else {
    if (isNan(boxInput)) {
      if (button = 2) {
        para.textContent = capital(boxInput);
      } else {
        para.textContent = "The last letter in that string is " + lastLetter(boxInput) + ".";
      }
    } else {
      para.textContent = "Sorry, you can't do that with numbers."
    }
  }
}

function addition(boxInput) {

}

function multiply() {

}

function capital(boxInput) {

}

function lastLetter(boxInput) {

}
