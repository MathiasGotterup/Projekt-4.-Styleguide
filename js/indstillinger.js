
//Staals java

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function skriftSprog(x){
if(x==2) {
	document.getElementById("btntext").innerHTML = "Language";
	document.getElementById("n").placeholder = "Name";
	document.getElementById("header").innerHTML = "Settings";
	document.getElementById("m").placeholder = "Write your message here";
	document.getElementById("kontakt").innerHTML = "Contactform";
	document.getElementById("logudtext").innerHTML = "Log out";
	
}else {
document.getElementById("btntext").innerHTML = "Sprog" ;
document.getElementById("n").placeholder = "Navn";
document.getElementById("header").innerHTML = "Indstillinger";
document.getElementById("m").placeholder = "Skriv din besked her";
document.getElementById("kontakt").innerHTML = "Kontaktformular";
document.getElementById("logudtext").innerHTML = "Log ud";
}
}
function logudskift()
{
	document.getElementById("lui").src = "Assets/logud.png"
}
function logudskifttilbage()
{
	document.getElementById("lui").src = "Assets/logudhvid.png"
}

const supermansconsolelog = ["superman", "batman", "spiderman"];
console.log(supermansconsolelog);
//Staals java

function _(id) {return document.getElementById(id);}
function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "example_parser.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );}











//console.log ("Kasper")
//var x = "Kasper";
//var y = "dahl";
//var z = x + y; 
//document.getElementById("69").innerHTML = z + " Nice";

//var red = backgroundColor = red;
//var green = backgroundColor = green;

//document.querySelectorAll('.stylebutton').forEach(function(e) {
//    e.addEventListener('click', function() {
//      this.style.backgroundColor = "red" + "green";
//    })
//  });