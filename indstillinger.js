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
  


