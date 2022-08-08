let btn = document.getElementById("btn");
let cardnumstrng = /[a-z]/;
let nameinput = document.getElementById("nameinput");
let cardnuminput = document.getElementById("cardnuminput");
let monthinput = document.getElementById("monthinput");
let yearinput = document.getElementById("yearinput");
let cvcinput = document.getElementById("cvcinput");
let right = document.getElementById("right");
let check = document.getElementById("check");
let thankyouCard = document.getElementById("thankyou-card");

let nameerror = document.getElementById("nameerror");
let cardnumerror = document.getElementById("cardnumerror");
let mmyyerror = document.getElementById("mmyyerror");
let cvcerror = document.getElementById("cvcerror");

btn.addEventListener("click", mainfunct);

function mainfunct() {
  if (nameinput.value == "") {
    nameerror.style.display = "block";
    nameinput.style.borderColor = "red";
  }
  if (monthinput.value == "") {
    mmyyerror.style.display = "block";
    monthinput.style.borderColor = "red";
  }
  if (yearinput.value == "") {
    mmyyerror.style.display = "block";
    yearinput.style.borderColor = "red";
  }
  if (cardnuminput.value == "") {
    cardnumblankerror.style.display = "block";
    cardnuminput.style.borderColor = "red";
  }

  if (cvcinput.value == "") {
    cvcerror.style.display = "block";
    cvcinput.style.borderColor = "red";
  } else {
    right.style.display = "none";
    btn.innerHTML = "Continue";
    

    check.src = "./images/icon-complete.svg";
    check.style.display = "block";
    thankyouCard.style.display = "block";
  }
}

nameinput.addEventListener("input", removeError);
cardnuminput.addEventListener("input", removeError);
monthinput.addEventListener("input", removeError);
yearinput.addEventListener("input", removeError);
cvcinput.addEventListener("input", removeError);

function removeError() {
  if (nameinput.value !== "") {
    nameerror.style.display = "none";
    nameinput.style.borderColor = "hsl(279, 6%, 55%)";
  
  }
  if (cardnuminput.value !== "") {
    cardnumblankerror.style.display = "none";
    cardnuminput.style.borderColor = "hsl(279, 6%, 55%)";
  }
  if (monthinput.value !== "") {
    mmyyerror.style.display = "none";
    monthinput.style.borderColor = "hsl(279, 6%, 55%)";
   
  }
  if (yearinput.value !== "") {
    mmyyerror.style.display = "none";
    yearinput.style.borderColor = "hsl(279, 6%, 55%)";
 
  }
  if (cvcinput.value !== "") {
    cvcerror.style.display = "none";
    cvcinput.style.borderColor = "hsl(279, 6%, 55%)";
  
  }
}
