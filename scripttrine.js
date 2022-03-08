const icons = ["firstImage", "secImage", "thirdImage"];
for(let i = 0; i < icons.length; i++){
    console.log(icons[i]);
}

firstImage = document.getElementById("first-img");
function swop(elem) {
        if(elem.style.opacity==1){
            elem.style.opacity=0;
        }
        else{
            elem.style.opacity=1;
        }
      };