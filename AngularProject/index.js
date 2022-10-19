let error;

const popup = document.getElementById("popup");
const close = document.getElementsByClassName("close")[0];
const p = document.getElementById("data").querySelector("p");
close.addEventListener("click",()=>{
  popup.style.display="none";
})

const validate=(event)=>{
  error=0;
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value;
  const email = document.getElementById("email").value;
}

const showError = (id,msg) => {
    error=1;
    let Id = document.getElementById(id);
    Id.textContent = msg;
    let input = Id.parentElement.querySelector("input");
    let select = Id.parentElement.querySelector("select");
    input?input.style.border="3px solid #f58d8d":null;
    select?select.style.border="3px solid #f58d8d":null;
  }

  const removeError = (id) => {
    let Id = document.getElementById(id);
    Id.textContent = '';
    let input = Id.parentElement.querySelector("input")
    input?input.style.border="3px solid #000000":null;
    let select = Id.parentElement.querySelector("select");
    select?select.style.border="3px solid #000000":null;
  }

  // user Id validation
if(userId.length<6){
    showError("userIdErr","user id length should be greater than 6");
  }
  else{
    removeError("userIdErr")
  }
  // password validation
const passwordCapRegx=/^(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$/
if(!password.match(passwordCapRegx)){
  showError("passwordErr","atleast 8 characters, 1 no & 1 capital letter is required");
}
else if(password.search(userId)>=0){
  showError("passwordErr","password should not contain user id");
}
else{
  removeError("passwordErr")
}
// name validation
const nameRegx = /^[A-Za-z ]+$/;
if(!name.match(nameRegx)){
  showError("nameErr","name should only contain alphabets");
}
else{
  removeError("nameErr")
}
// country validation
if(country=="null"){
    showError("countryErr","please select your country");
  }
  else{
    removeError("countryErr")
  }
  // zip validation
const zipRegx = /^[0-9]+$/;
if(!zip.match(zipRegx)){
  showError("zipErr","please enter valid zip code");
}
else{
  removeError("zipErr")
}
// email validation
const emailRegx=/^\\S+@\\S+\\.\\S+$/;
if(!email.match(emailRegx)){
  showError("emailErr","please enter a valid email");
}
else{
  removeError("emailErr")
}
// gender validation
const male=document.getElementById("male");
const female=document.getElementById("female");
let gender;
if(male.checked==false&&female.checked==false){
  showError("genderErr","choose your gender");
}
else {
  if(male.checked==true){
    gender=male.value;
  }
  if(female.checked==true){
    gender=female.value;
  }
  
  removeError("genderErr")
}

// language validation
const lang1=document.getElementById("lang1");
const lang2=document.getElementById("lang2");
const lang3=document.getElementById("lang3");
const lang4=document.getElementById("lang4");
const lang5=document.getElementById("lang5");
const lang6=document.getElementById("lang6");
const languages=[];
if(lang1.checked==false&&lang2.checked==false&&lang3.checked==false&&lang4.checked==false&&lang5.checked==false&&lang6.checked==false){
  showError("languageErr","please select the languages you know");
}
else{
  if(lang1.checked==true)
  languages.push(lang1.value);
  if(lang2.checked==true)
  languages.push(lang2.value);
  if(lang3.checked==true)
  languages.push(lang3.value);
  if(lang4.checked==true)
  languages.push(lang4.value);
  if(lang5.checked==true)
  languages.push(lang5.value);
  if(lang6.checked==true)
  languages.push(lang6.value);

  removeError("languageErr")
}
if(error==0){
    event.preventDefault();
    const output=`UserId = ${userId}; Password = ${password}; Name = ${name}; Country = ${country}; Zip = ${zip}; Email = ${email}; Gender = ${gender}; Languages known = ${languages}`;
    popup.style.removeProperty("display");
    p.textContent=output;
  }
  else{
    event.preventDefault();
  }