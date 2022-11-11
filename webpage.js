const registerpage= document.getElementById("registerpage")
      userid= document.getElementById("userid")
      email= document.getElementById("email")
      mobile_number= document.getElementById("mobile number")
      Date_of_birth= document.getElementById("Date of birth")
      gender= document.getElementById("gender")
      Father_name= document.getElementById("Father name")
      Mother_name= document.getElementById("Mother name")
      house_no_area= document.getElementById("house no./area")
      city= document.getElementById("city")
      state= document.getElementById("state")
      nationality= document.getElementById("nationality")
      password= document.getElementById("password")
      password2= document.getElementById("password2")

    registerpage.addEventListener('sumit',e=>{
      e.preventDefault();
      checkInput();
    });
    function checkInput(){
      const usernameValue  = userid.value.trim();
      const emailValue = email.value.trim();
      const mobilenumberValue = mobile_number.value.trim();
      const dobValue = Date_of_birth.value.trim();
      const genderValue = gender.value;
      const fatherValue = Father_name.value.trim();
      const motherValue = Mother_name.trim();
      const houseValue = house_no_area.value.trim();
      const cityValue = city.value.trim();
      const stateValue = state.value.trim();
      const nationalityValue = nationality.value.trim();
      const passwordValue = password.value.trim();
      const password2value = password2.value.trim();

      if(usernameValue===''){
        setError(userid, 'User name cannot be blank');
      }
      else{
        setSuccess(userid);
      }
      if(emailValue===''){
        setError(email, 'Email cannot be blank');
      }
      else if(!isEmail(emailValue)){
        setError(email, 'Not a valid Email')
      }
      else{
        setSuccess(email);
      }
      if(mobilenumberValue===''){
        setError(mobile_number, 'mobile number cannot be blank');
      }
      else if(!isNumber(mobile_number)){
        setError(mobile_number, 'enter valid mobile number') 
      }
      else{
        setSuccess(mobile_number);
      }
      if(dobValue===''){
        setError(Date_of_birth, 'enter your date of birth');
      }
      else{
        setSuccess(Date_of_birth);
      }
      if(genderValue===''){
        setError(gender, 'enter your date of birth');
      }
      else{
        setSuccess(gender);
      }
      if(fatherValue===''){
        setError(Father_name, 'enter your date of birth');
      }
      else{
        setSuccess(Father_name);
      }
      if(motherValue===''){
        setError(Mother_name, 'enter your date of birth');
      }
      else{
        setSuccess(Mother_name);
      }
      if(houseValue===''){
        setError(house_no_area, 'enter your date of birth');
      }
      else{
        setSuccess(house_no_area);
      }
      if(cityValue===''){
        setError(city, 'enter your date of birth');
      }
      else{
        setSuccess(city);
      }
      if(stateValue===''){
        setError(state, 'enter your date of birth');
      }
      else{
        setSuccess(state);
      }
      if(nationalityValue===''){
        setError(nationality, 'enter your date of birth');
      }
      else{
        setSuccess(nationality);
      }
      if(passwordValue===''){
        setError(password, 'enter your date of birth');
      }
      else{
        setSuccess(password);
      }
      if(password2value===''){
        setError(password2, 'enter your date of birth');
      }
      else if(password2value===passwordValue
        ){
        setError(password2, 'pass did not match')
      }
      else{
        setSuccess(password2);
      }

    function setError(input, message){
      const regpagecontrol = input.parentElement;
      const small = regpagecontrol.querySelector('small');
      regpagecontrol.classname = 'registerpage.error';
      small.innerText=message;
    }
    function setSuccess(input){
      const regpagecontrol=input.parentElement;
      regpagecontrol.classname = 'registrationpage success'
    }

    function isEmail(email){
      return /^(([^<>()\[\]\\…, ;}\s@"]+(\• {^<>()\[\]\\-, ;÷\s@^]+)*)| ("+"))@((\[[8-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(( [a-zA-Z\-8-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
    function isNumber(mobile_number){
      return /1234567890/.test(mobile_number);
    }
}                                             