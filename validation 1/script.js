//start firstname validation
function fname_val()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	var check = document.getElementById("tick");
	fname == "" ? input.setAttribute("value","This field is empty field") : check.style.display = "inline";
	fname == "" ? input.setAttribute("class","animated infinite bounce") : check.style.display = "inline";
	fname == "" ? input.style.color = "red" : check.style.display = "inline";
	fname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}

function fname_val_close()
{
	var fname = document.getElementById("firstname").value;
	var input = document.getElementById("firstname");
	fname == "This field is empty field" ? input.setAttribute("value",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.setAttribute("class",""):check.style.display = "inline";
	fname == "This field is empty field" ? input.style.color = "black":check.style.display = "inline";
	fname == "This field is empty field" ? input.style.border = "1px solid #ccc":check.style.display = "inline";	
}

//end firstname validation

// start lastname validation


function lname_val()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	var check = document.getElementById("ltick");
	lname == "" ? input.setAttribute("value","This field is empty field") : check.style.display = "inline";
	lname == "" ? input.setAttribute("class","animated infinite bounce") : check.style.display = "inline";
	lname == "" ? input.style.color = "red" : check.style.display = "inline";
	lname == "" ? input.style.border = "1px solid red" : check.style.display = "inline";
}

function lname_val_close()
{
	var lname = document.getElementById("lastname").value;
	var input = document.getElementById("lastname");
	lname == "This field is empty field" ? input.setAttribute("value",""):check.style.display = "inline";
	lname == "This field is empty field" ? input.setAttribute("class",""):check.style.display = "inline";
	lname == "This field is empty field" ? input.style.color = "black":check.style.display = "inline";
	lname == "This field is empty field" ? input.style.border = "1px solid #ccc":check.style.display = "inline";
	
}

// end lastname validation

//start mobile coding...
function mobile_val()
{
	var mobile = document.getElementById("mobile").value;
	var input = document.getElementById("mobile");
	var check = document.getElementById("mtick");
    mobile == "" ? input.style.color = "red" : mobile;
    mobile == "" ? input.setAttribute("class","animated infinite bounce") : mobile;
    mobile == "" ? input.style.border = "1px solid red" : mobile;
	var check_digit_legth = mobile == "" ? input.setAttribute("value","this field is empty"):mobile;
	var digit_check = check_digit_legth.length == 10 ? check_digit_legth : window.alert("Enter only 10 digit mobile number");
	digit_check.charAt(0) == 9 || digit_check.charAt(0) == 8 || 
	digit_check.charAt(0) == 7 ? check.style.display = "inline" : window.alert("Enter indian number only");
	
}
function mobile_val_close()
{
    var mobile = document.getElementById("mobile").value;
    var input = document.getElementById("mobile");
    mobile == "this field is empty" ? input.setAttribute("value","") : check.style.display = "inline";
    mobile == "this field is empty" ? input.style.color = "black" : check.style.display = "inline";
    mobile == "this field is empty" ? input.style.border = "1px solid #ccc" : check.style.display = "inline";
    mobile == "this field is empty" ? input.setAttribute("class","") : check.style.display = "inline";
}
//end mobile coding..

//re-mobile coding start....
function remobile_val()
{
    var mobile = document.getElementById("mobile").value;
    var remobile = document.getElementById("re-mobile").value;
    var input = document.getElementById("re-mobile");
    var check = document.getElementById("rmtick");
    var examine = remobile == "" ? window.alert("fill up the re-mobile field") : remobile;
    examine == mobile ? check.style.display = "inline" : input.value = "write the above number";
}
function remobile_val_close()
{
    var remobile = document.getElementById("re-mobile").value;
    var input = document.getElementById("re-mobile");
    remobile == "write the above number" ? input.value = "" : check.style.display = "inline";
}
//re-mobile coding end..

//start email coding
function email_val()
{
    var email = document.getElementById("email").value;
    var hint = document.getElementById("email-hint");
    var check = document.getElementById("etick");
    email.match('@') ? hint.style.display = "inline" : hint.style.display = "none";
    email.match("gmail.com") ? hint.style.display = "none" : email;
    email.match("yahoomail.com") ? hint.style.display = "none" : email;
}
function tick()
{
    var check = document.getElementById("etick");
    var email = document.getElementById("email");
    email == "" ? email : check.style.display = "inline";
}
function gmail()
{
    var email = document.getElementById("email").value;
    var input = document.getElementById("email");
    var hint = document.getElementById("email-hint");
    input.value = email+"gmail.com";
    hint.style.display = "none";
}
function yahoomail()
{
    var email = document.getElementById("email").value;
    var input = document.getElementById("email");
    var hint = document.getElementById("email-hint");
    input.value = email+"yahoomail.com";
    hint.style.display = "none";
}
//end email coding

//start user name coding..
function uname_val()
{
    var uname = document.getElementById("username");
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var check = document.getElementById("utick");
    uname.setAttribute("value",fname+lname);
    uname.setAttribute("disabled","disabled");
    check.style.display = "inline";
}

//end user name coding...

//start password validation
function pass_val()
{
    var pwd = document.getElementById("password").value;
    var input = document.getElementById("password");
    var check = document.getElementById("ptick");
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var num = /[0-9]/g;
    var alpha = /[~|`|!|@|#|$|%|^|&|*|(|)|-|_|+|=]/g;
    var check_upper = pwd == "" ? window.alert("password field is empty") : pwd;
    var check_lower = check_upper.charAt(0).match(upper) ? check_upper : window.alert("First latter should be capital");
    var check_num = check_lower.match(lower) ? check_lower : window.alert("use atlist one small latter");
    var check_alpha = check_num.match(num) ? check_num : window.alert("use atlist one number");
    var check_length = check_alpha.match(alpha) ? check_alpha : window.alert("use atlist one alpha numeric charecter");
    check_length.length>6 ? check.style.display = "inline" : window.alert("weak password ! type atlist 6 digit password");
}
//end password validation

//start submit coding
function submit_btn()
{
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById("lastname").value;
    var mobile = document.getElementById("mobile").value;
    var remobile = document.getElementById("re-mobile").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var signup = document.getElementById("btn");
    
    fname,lname,mobile,remobile,email,uname,password = "" ? signup.disabled = true : signup.disabled = false;
}
//end submit coding


