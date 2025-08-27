
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

let count_nav = 100; 
countNav.innerText = count_nav;


for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", () => {
    count_nav -= 10;                
    countNav.innerText = count_nav;
    
    if(count_nav<=0){
      alert("Recharge Your Balance")
      count_nav=0;
    }
  });
}


