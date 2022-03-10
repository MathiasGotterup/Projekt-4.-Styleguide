//Staal animation
const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded" , (i)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 2000);
})
  function intro() {
      
        let id = null;
        const elem = document.getElementById("e");          
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 3);
        function frame() {
          if (pos >= 50 ) {
            clearInterval(id); 
          } else {
        pos = pos+0.1; 
            elem.style.marginLeft = pos + "%";
          }
        }
      }


      const le = document.getElementById("e");
      const lz = document.getElementById("z");
      const li = document.getElementById("i");
      const ln = document.getElementById("n");
      const lf = document.getElementById("f");
      const lo = document.getElementById("o");


      

      

//Staal animation slut



// Start Lynge's login 
let checks = [false, false];

function bvalid(){
    let text = document.getElementById("berr");
    if(document.getElementById("bind").value){
        text.innerHTML = "Tjek";
        text.style.color = "green";
        checks[0] = true;
    }else{
        text.innerHTML = "Skriv brugernevn";
        text.style.color = "red";
        checks[0] = false;
    }
}

function kvalid(){
    let pass = document.getElementById("kind");
    if(pass.value){
        let text = document.getElementById("kerr");
        if(pass.value.length > 7){
            text.innerHTML = "Tjek";
            text.style.color = "green";
            checks[1] = true;
        }else{
            text.innerHTML = "Kodeord for kort, minimum 8 tegn";
            text.style.color = "red";
            checks[1] = false;
        }
        
    }else{
        let text = document.getElementById("kerr")
        text.innerHTML = "Skriv kodeord";
        text.style.color = "red";
        checks[1] = false;
    }
}

function seep(){
    let pass = document.getElementById("kind");
    let btn = document.getElementById("btnveiw");
    if(pass.type == "password"){
        pass.type = "text";
        btn.src = "eyeyes.png";
    }else{
        pass.type = "password";
        btn.src = "eyeno.png";
    }
    
}

function sub(){
    let checker = 0;
    for(let i = 0; i < checks.length; i++){
        if(checks[i] == true){
            checker++;
        }
    }
    if(checker == checks.length){
        alert("Ind");
    }else{
        alert("Brugernavn eller kodeord er forkert")
    }
}

// Slut Lynge's login