const bubbles = ["bubble1", "bubble2", "bubble3","bubble4"];
for(let i = 0; i < bubbles.length; i++){
    console.log(bubbles[i]);
}


let box = document.getElementById("bubble1");
let btn = document.getElementById("btn1");
let x = true;

btn.addEventListener("click", function() {
    if(x == true){
        let height1 = box.offsetHeight
        box.style.height= (height1=210)+"px";
        btn.innerHTML = "Se mindre &#8249;";
        x = false;
    }
    else{
        let height1 = box.offsetHeight
        box.style.height= (height1=80)+"px";
        btn.innerHTML = "Se opslag &#8250;";
        x = true;
    }
});

let box2 = document.getElementById("bubble2");
let btn2 = document.getElementById("btn2");
let y = true;

btn2.addEventListener("click", function() {
    if(y == true){
        let height2 = box2.offsetHeight
        box2.style.height= (height2=210)+"px";
        btn2.innerHTML = "Se mindre &#8249;";
        y = false;
    }
    else{
        let height2 = box2.offsetHeight
        box2.style.height= (height2=80)+"px";
        btn2.innerHTML = "Se opslag &#8250;";
        y = true;
    }
});

let box3 = document.getElementById("bubble3");
let btn3 = document.getElementById("btn3");
let z = true;

btn3.addEventListener("click", function() {
    if(z == true){
        let height3 = box3.offsetHeight
        box3.style.height= (height3=210)+"px";
        btn3.innerHTML = "Se mindre &#8249;";
        z = false;
    }
    else{
        let height3 = box3.offsetHeight
        box3.style.height= (height3=80)+"px";
        btn3.innerHTML = "Se opslag &#8250;";
        z = true;
    }
});

let box4 = document.getElementById("bubble4");
let btn4 = document.getElementById("btn4");
let w = true;

btn4.addEventListener("click", function() {
    if(w == true){
        let height4 = box4.offsetHeight
        box4.style.height= (height4=210)+"px";
        btn4.innerHTML = "Se mindre &#8249;";
        w = false;
    }
    else{
        let height4 = box4.offsetHeight
        box4.style.height= (height4=80)+"px";
        btn4.innerHTML = "Se opslag &#8250;";
        w = true;
    }
});
