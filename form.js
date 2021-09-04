let email=document.getElementById("email");
let pwd= document.getElementById("pwd");
let error=document.getElementById("error");
let regexp=/^([A-Za-z0-9\._]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3}?)$/
let  pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
 let regexpwd=/^([A-Za-z0-9]{})/
function form_validate(){
   
    if(email.value.trim()==""){
        alert("email cant be empty");
        return false;
     }
     else if(pwd.value.trim()==""){
            alert("password cant be empty");
    return false;
    }
    //  else if(pwd.value.length<8){
    //  alert("password should contain minimum 8 charecters");
    //  return false;
    //  }

    //   else if (pwd.search(/[a-z]/) < 1) {
    //     alert("Your password needs a lower case letter and weak")
    //     return false;
    //   } else if(pwd.search(/[A-Z]/) < 1) {
    //     alert("Your password needs an uppser case letter and medium strong")
    //     return false;
    //   } else  if (pwd.search(/[0-9]/) < 1) {
    //     alert("Your password needs a number")
    //     return false;
    //   } 
   
 if(regexp.test(email.value)){
        // error.innerHTML="valid";
        // error.style.value="green";
        alert("valid email");
        // return true;
    }
    else{
        alert(" email address should be incorrect format!")
    return false;
        // error.innerHTML="invalid";
        // error.style.color="red";
        // return false;
    }
    if(pattern.test(pwd.value)){
        alert("successful pwd");
        // return true;
    }
    else {
        alert("Your password should contain minimum 8 charecters ,including 1 uppercase,1 lowercase and 1 number")
          return false;
        // alert("Your password is strong")
      }
    return true;

   

   
}
