function show_message()
{
    var message = document.getElementById("message");
    message.style.display = "block";
}
function check()
{
    var user = document.getElementById("password").value;
    var icon = document.getElementById("icon");
    var message = document.getElementById("message");
    var p_upper = document.getElementById("upper");
    var p_lower = document.getElementById("lower");
    var p_num = document.getElementById("num");
    var capital = /[A-Z]/g;
    var small = /[a-z]/g;
    var digit = /[0-9]/g;
    user.match(capital)?p_upper.style.display ="none":p_upper.style.display ="block";
    user.match(small)?p_lower.style.display ="none":p_lower.style.display ="block";
    user.match(digit)?p_num.style.display ="none":p_num.style.display ="block";
    user.match(capital)&&user.match(small)&&user.match(digit)?message.style.display ="none":message.style.display ="block";
    user.match(capital)&&user.match(small)&&user.match(digit)?icon.style.display = "block":icon.style.display = "none";
}