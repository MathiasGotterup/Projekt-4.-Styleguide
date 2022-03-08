const bubbles = ["bubble1", "bubble2", "bubble3","bubble4"];
for(let i = 0; i < bubbles.length; i++){
    console.log(bubbles[i]);
}

let boxes = document.getElementsByClassName("tekstbubble");
console.log(boxes);
let btns = document.getElementsByClassName("nyhederknap");



function jsbubbles(b) {
    let box = boxes[b];
    let height1 = box.offsetHeight;
        if(height1 < 100){
        box.style.height= (height1=210)+"px";
        btns[b].innerHTML = "Se mindre &#8249;";
    }
    else{
        let height1 = box.offsetHeight
        box.style.height= (height1=80)+"px";
        btns[b].innerHTML = "Se opslag &#8250;";
    }
};