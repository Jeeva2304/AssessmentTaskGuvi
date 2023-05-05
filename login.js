
var email_username=document.forms['form']['email_username'];
var userpassword=document.forms['form']['userpassword'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email_username.addEventListener('textInput', email_verify);
userpassword.addEventListener('textInput', pass_verify);

function validated()
{
    if(email_username.value.length < 9)
    {
        email_username.style.border = "1px solid red";
        email_error.style.display = "block";
        email_error.focus();
        return false;
    }
    
    if(userpassword.value.length < 6)
    {
        userpassword.style.border = "1px solid red";
        pass_error.style.display =  "block";
        pass_error.focus(); 
        return false;
    }
}

function email_verify()
{
    if(email_username.value.length >= 9)
    {
        email_username.style.border="1px solid silver";
        email_error.style.display="none";
        return true
    }
}

function pass_verify()
{
    if(userpassword.value.length >= 6)
    {
        userpassword.style.border="1px solid silver";
        pass_error.style.display="none";
        return true;    
    }
}
