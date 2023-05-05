
var fullname=document.forms['form']['fullname'];
var email=document.forms['form']['email'];
var mob_no=document.forms['form']['mob_no'];
var username=document.forms['form']['username'];
var password=document.forms['form']['password'];

var name_error=document.getElementById('name_error');
var mail_error=document.getElementById('mail_error');
var mob_error=document.getElementById('mob_error');
var user_error=document.getElementById('user_error');
var password_error=document.getElementById('password_error');

fullname.addEventListener('textInput', name_verify);
email.addEventListener('textInput', mail_verify);
mob_no.addEventListener('textInput', number_verify);
username.addEventListener('textInput', user_verify);
password.addEventListener('textInput', password_verify);


function validated()
{
    if(fullname.value.length < 2)
    {
        fullname.style.border = "1px solid red";
        name_error.style.display = "block";
        name_error.focus();
        return false;
    }

    if(email.value.length < 9)
    {
        email.style.border = "1px solid red";
        mail_error.style.display = "block";
        mail_error.focus();
        return false;
    }

    if(mob_no.value.length < 7)
    {
        mob_no.style.border = "1px solid red";
        mob_error.style.display = "block";
        mob_error.focus();
        return false;
    }

    if(username.value.length < 5)
    {
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        user_error.focus();
        return false;
    }

    if(password.value.length < 8)
    {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password_error.focus();
        return false;
    }
}

function name_verify()
{
    if(fullname.value.length >= 1 )
    {
        fullname.style.border = "1px solid silver";
        name_error.style.display = "none";
        return true;
    }
}

function mail_verify()
{
    if(email.value.length >= 9)
    {
        email.style.border = "1px solid silver";
        mail_error.style.display = "none";
        return true;
    }
}

function number_verify()
{
    if(mob_no.value.length >= 8)
    {
        mob_no.style.border = "1px solid silver";
        mob_error.style.display = "none";
        return true;
    }
}

function user_verify()
{
    if(username.value.length >= 5)
    {
        username.style.border = "1px solid silver";
        user_error.style.display = "none";
        return true;
    }
}

function password_verify()
{
    if(password.value.length >= 8)
    {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}