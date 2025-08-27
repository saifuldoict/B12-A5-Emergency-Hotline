
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
    count_nav -= 10;                
    countNav.innerText = count_nav;
    
    
    if(count_nav<=10){
      alert("Recharge Your Balance")
      
    } 
  });
}


const callHistory = document.getElementById("call_history");

    callButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const serviceName = btn.parentElement.querySelector("h3").innerText;
        const time = new Date().toLocaleTimeString();

        // Create a new div for each transaction
        const transactionDiv = document.createElement("div");
        transactionDiv.className = "transaction";
        transactionDiv.innerHTML = `
          <strong>${serviceName}</strong><br>
          <small>Time: ${time}</small>
        `;

        // Append transaction to call history
        callHistory.appendChild(transactionDiv);
      });
    });


