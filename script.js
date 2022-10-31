function validation(){
      let name=document.forms['reg_form']['name'].value;
      let code=document.forms['reg_form']['code'].value;
      let email=document.forms['reg_form']['user_email'].value;
      let password=document.forms['reg_form']['user_password'].value;
      let password_confirm=document.forms['reg_form']['user_password_confirm'].value;
      if(name == ''){
            alert("Name couldn't be blank");
            return false;
      }
      else if(name.length < 6|| name.length >20 ){
            alert("Name couldn't be less than 6 or greater than 20 characters");
            return false;
      }
      else{
            if(code==''){
                  alert("Security code couldn't be blank");
                  return false;
            }
            else if(code.length !=8){
                  alert("Security code couldn't be more or less than 8 characters");
                  return false;
            }
            else if(isNaN(code)){
                  alert("Security code must be numbers");
                  return false;
            }
            else{
                  if(email==""){
                        alert("Email couldn't be blank");
                        return false;
                  }
                  else {
                        if(password=="" || password_confirm==""){
                              alert("Both passwords must be entered")
                              return false;
                        }
                        else if(password != password_confirm){
                              alert("Passwords must be same");
                              return false;
                        }
                  }
            }
      }

}