
	var l_check = document.getElementById("l-check");
	var m_check = document.getElementById("m-check");
	var d_check = document.getElementById("d-check");
	var e_check = document.getElementById("e-check");
	var re_check = document.getElementById("re-check");
	var p_check = document.getElementById("p-check");
	var f_check = document.getElementById("f-check");
	
	var l_cross = document.getElementById("l-cross");
	var m_cross = document.getElementById("m-cross");
	var d_cross = document.getElementById("d-cross");
	var e_cross = document.getElementById("e-cross");
	var re_cross = document.getElementById("re-cross");
	var p_cross = document.getElementById("p-cross");
	var f_cross = document.getElementById("f-cross");

function fname_val()
{	var fname = document.getElementById("firstname").value;
	if(fname == "")
	{
		f_cross.style.display = "inline";
	}
	else{
		f_check.style.display = "inline";
		f_cross.style.display = "none";
	}
}
function lname_val()
{	var lname = document.getElementById("lastname").value;
	if(lname == "")
	{
		l_cross.style.display = "inline";
	}
	else{
		l_check.style.display = "inline";
		l_cross.style.display = "none";
	}
}
function mob_val()
{	var mbl = document.getElementById("mobile").value;
	if(mbl.length==10)
	{
		m_check.style.display = "inline";
		m_cross.style.display = "none";
	}
	else{
		m_check.style.display = "none";
		m_cross.style.display = "inline";
		document.getElementById("mobile").value=" ";
		document.getElementById("mobile").placeholder="you have to entered right number";
	}
}
function date_val()
{	var dob = document.getElementById("date").value;
	if(dob == "")
	{
		d_cross.style.display = "inline";
	}
	else{
		d_check.style.display = "inline";
		d_cross.style.display = "none";
	}
}
function email_val()
{	var e_mail = document.getElementById("email").value;
	if(e_mail == "")
	{
		e_cross.style.display = "inline";
	}
	else{
		e_check.style.display = "inline";
		e_cross.style.display = "none";
	}
}
function re_email_val()
{	var re_email = document.getElementById("re-email").value;
	if(re_email == "")
	{
		re_cross.style.display = "inline";
	}
	else{
		re_check.style.display = "inline";
		re_cross.style.display = "none";
	}
}
function pass_val()
{	var pwd = document.getElementById("password").value;
	if(pwd == "")
	{
		p_cross.style.display = "inline";
	}
	else{
		p_check.style.display = "inline";
		p_cross.style.display = "none";
	}
}
function sign_in()
{
	var fname = document.getElementById("firstname").value;
	var lname = document.getElementById("lastname").value;
	var mbl = document.getElementById("mobile").value;
	var dob = document.getElementById("date").value;
	var e_mail = document.getElementById("email").value;
	var re_email = document.getElementById("re-email").value;
	var pwd = document.getElementById("password").value;
	if(fname=lname=mbl=dob=e_mail=re_email=pwd=="")
	{
		f_cross.style.display = "inline";
		l_cross.style.display = "inline";
		m_cross.style.display = "inline";
		d_cross.style.display = "inline";
		e_cross.style.display = "inline";
		re_cross.style.display = "inline";
		p_cross.style.display = "inline";
	}
	else{
		var sub = document.getElementById("signin");
		sub.disabled = false;
	}
}