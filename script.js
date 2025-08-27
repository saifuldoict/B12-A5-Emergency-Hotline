
const navHeartCounter = document.getElementById("hart_nav");

const heartIcons = document.getElementsByClassName("hart");


let heartCount = 0;
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function() {
    heartCount++; 
    navHeartCounter.textContent = heartCount; 
    
  });
}


const countNav = document.getElementById("count_nav");
const callButtons = document.getElementsByClassName("call_btn");




const CallHistory = document.getElementById("CallHistory");

let count_nav = 100; 
countNav.innerText = count_nav;


for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", () => {
    count_nav -= 20;                
    countNav.innerText = count_nav;
    
    
    if(count_nav<20){
      alert("Recharge Your Balance")
      for (let j = 0; j < callButtons.length; j++) {
        callButtons[j].disabled = true;
        callButtons[j].classList.add("bg-red-600");
        
      }
    } 
    
  });
}





