function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
	prlx_lyr_1.style.top = -(window.pageYOffset / 4)+'px';
	prlx_lyr_2.style.top = -(window.pageYOffset / 8)+'px';
}
window.addEventListener("scroll", parallax, false);

//function loopuge(){
	//document.getElementById(uge2).style.display = "block"
//}

//function ifelse() {
	//let x = document.getElementById("");
	//if (x.style.display === "none") {
	  //x.style.display = "block";
	//} else {
	  //x.style.display = "none";
	//}
  //}
  //her kan man edit i css så man kan vise forskellige dele i HTMLen

 //function loopuge(x) {
//	let uge1=document.getElementById("uge1")
//	let uge2=document.getElementById("uge2")
//	let uge3=document.getElementById("uge3")

//	const uger=["uge1", "uge2", "uge3"]
	//if (x==1) {u++}

	//for(let i = 0; i < uger.length;i++) {
	//if (i==u) {uger[i].style.display=block}
	//else {uger[i].style.display=none}
	//}
  //}

//function test(){
//	elem.parentElement
//		if(uger==0){elem.parentElement.style.display = "block"}  
//}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("uge");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}