var firstnameEvent = document.getElementById("first");
firstnameEvent.onblur = function first()
{
	var box = document.getElementById("first").value;
	var icon = document.getElementById("icon-one");
	var input = document.getElementById("first");
	if(box == "")
	{
		icon.style.opacity = "1";
		input.style.border = "2px solid red";
	}
	input.onclick = function()
	{
		var img = document.getElementById("f-name-img");
		img.style.display = "block";
		input.style.border = "1px solid #ccc";
		icon.style.opacity = "0";
	input.oninput = function()
	{
		var img = document.getElementById("f-name-img");
		img.style.display = "none";
	}
	}
	
}
var lastnameEvent = document.getElementById("last");
lastnameEvent.onblur = function last()
{
	var box = document.getElementById("last").value;
	var icon = document.getElementById("icon-two");
	var input = document.getElementById("last");
	if(box == "")
	{
		icon.style.opacity = "1";
		input.style.border = "2px solid red";
	}
	input.onclick = function()
	{
		var img = document.getElementById("s-name-img");
		img.style.opacity = "1";
		input.style.border = "1px solid #ccc";
		icon.style.opacity = "0";
	input.oninput = function()
	{
		var img = document.getElementById("s-name-img");
		img.style.opacity = "0";
	}
	}
}
var mobileEvent = document.getElementById("mobile");
mobileEvent.onblur = function mobile()
{
	var box = document.getElementById("mobile").value;
	var icon = document.getElementById("icon-three");
	var input = document.getElementById("mobile");
	if(box == "")
	{
		icon.style.opacity = "1";
		input.style.border = "2px solid red";
	}
	input.onclick = function()
	{
		input.style.border = "1px solid #ccc";
		icon.style.opacity = "0";
	}
}
var passwordEvent = document.getElementById("password");
passwordEvent.onblur = function password()
{
	var box = document.getElementById("password").value;
	var icon = document.getElementById("icon-four");
	var input = document.getElementById("password");
	if(box == "")
	{
		icon.style.opacity = "1";
		input.style.border = "2px solid red";
	}
	input.onclick = function()
	{
		var img = document.getElementById("pass-img");
		img.style.display = "block";
		input.style.border = "1px solid #ccc";
		icon.style.opacity = "0";
	input.oninput = function()
	{
		var img = document.getElementById("pass-img");
		img.style.display = "none";
	}
	}
	var checkbtn = document.getElementById("check_box");
	checkbtn.onclick = function()
	{
		var span = document.getElementById("hide-show");
		if(checkbtn.checked == true)
		{
			input.type = "text";
			span.innerHTML = "Hide password";
		}
		else{
			input.type = "password";
			span.innerHTML = "Show password";
		}
	}
}
var formEvent = document.getElementById("form");
formEvent.onsubmit = function()
{
	var boxOne = document.getElementById("first").value;
	var	boxTwo = document.getElementById("last").value;
	var boxThree = document.getElementById("mobile").value;
	var boxFour = document.getElementById("password").value;
	var iconOne = document.getElementById("icon-one");
	var iconTwo = document.getElementById("icon-two");
	var iconThree = document.getElementById("icon-three");
	var iconFour = document.getElementById("icon-four");
	if(boxOne=boxTwo=boxThree=boxFour == "")
	{
		firstnameEvent.style.border = "2px solid red";
		lastnameEvent.style.border = "2px solid red";
		mobileEvent.style.border = "2px solid red";
		passwordEvent.style.border = "2px solid red";
		iconOne.style.opacity = "1";
		iconTwo.style.opacity = "1";
		iconThree.style.opacity = "1";
		iconFour.style.opacity = "1";
		return false;
	}
}