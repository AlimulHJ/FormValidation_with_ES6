var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var confirmPass = document.getElementById('confirmpass');

// console.log("username: "+username);
// console.log("username.value: "+username.value);
// console.log("username.value.trim(): "+username.value.trim());
// console.log("---");




form.addEventListener('submit', (event)=>{
  event.preventDefault();
  validate();
})

// more email validate:
const isEmail = (emailVal) =>{
  var atSymbol = emailVal.indexOf('@');
  if (atSymbol < 1) return false;
  var dot = emailVal.lastIndexOf('.');
  if(dot <= atSymbol + 2) return false;
  if(dot === emailVal.length-1) return false;
  return true;
}



const sendData = (usernameVal , sRate,count) =>{
  if(sRate===count){
    // alert('Registration successful.');
    swal("Welcome "+usernameVal, " Registration successful!", "success");
    // location.href= `demo.html?username=${usernameVal}`;


    // adding delay:
    setTimeout(function(){
      location.href= `demo.html?username=${usernameVal}`;
    },2000); //delay is in milliseconds 
    // This function will automatically send to demo.html 

  }
}

const successMsg = (usernameVal) =>{
  let formCon = document.getElementsByClassName('form-control');
  var count = formCon.length -1;
  // console.log(count);
  for(var i=0; i< formCon.length; i++){
    if(formCon[i].className==="form-control success"){
      var sRate = 0+i;
      // console.log("sRate: "+sRate);
      sendData(usernameVal , sRate , count);
    }else{
      return false;
    }
  }
}



// define the function:
const validate = () =>{
  const usernameVal = username.value.trim();
  // console.log(usernameVal.length);
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const confirmPassVal = confirmPass.value.trim();

  // validate username:
  if(usernameVal===""){
    setErrorMsg(username, 'Username cannot be blank!');
  }else if(usernameVal.length <=2){
    setErrorMsg(username,'Username requires min 3 char!');
  }else{
    setSuccessMsg(username);
  }

  // validate email:
  if(emailVal===""){
    setErrorMsg(email, 'Email cannot be blank!');
  }else if(!isEmail(emailVal)){
    setErrorMsg(emailVal,'Not a valid email!');
  }else{
    setSuccessMsg(email);
  }
  
  // validate phone:
  if(phoneVal===""){
    setErrorMsg(phone, 'Phone cannot be blank!');
  }else if(phoneVal.length != 11){
    setErrorMsg(phone,'Not a valid number!');
  }else{
    setSuccessMsg(phone);
  }

  // validate password:
  if(passwordVal===""){
    setErrorMsg(password, 'Password cannot be blank!');
  }else if(passwordVal.length <= 3){
    setErrorMsg(password,'Minimum 4 char needed!');
  }else{
    setSuccessMsg(password);
  }

    // validate confirmPass:
    if(confirmPassVal===""){
      setErrorMsg(confirmPass, 'Insert password for confirmation!');
    }else if(confirmPassVal != passwordVal){
      setErrorMsg(confirmPass,'Password didn\'t matched!');
    }else{
      setSuccessMsg(confirmPass);
    }


  successMsg(usernameVal);

}   // End of validate function.




function setErrorMsg(input, errorMsg){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = "form-control error";
  small.innerText = errorMsg;
}

function setSuccessMsg(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success";

}