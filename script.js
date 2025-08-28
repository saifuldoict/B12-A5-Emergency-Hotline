
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
// const callButtons = document.getElementsByClassName("call_btn");



const callButtons = document.querySelectorAll(".call_btn");


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

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
     
      const card = btn.closest(".service_card");
      const serviceName = card.querySelector("h4").innerText;
      alert(serviceName + " calling...");
    });
  });



  const transactionContainer = document.getElementById("transaction_container");
  const clearBtn = document.getElementById("clear_btn");

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Find parent card
      const card = btn.closest(".bg-white");

      // Service name & number
      const serviceName = card.querySelector("h4").innerText;
      const serviceNumber = card.querySelector("h4.text-2xl").innerText;

      // Current time
      const now = new Date();
      const timeString = now.toLocaleTimeString();

      // Create new history div
      const historyItem = document.createElement("div");
      historyItem.className =
        "flex items-center justify-between bg-[#fafafa] rounded-lg px-4 py-2";

      historyItem.innerHTML = `
        <div>
          <h1 class="text-black font-bold">${serviceName}</h1>
          <p class="text-gray-400">${timeString}</p>
        </div>
        <p class="font-bold text-gray-700">${serviceNumber}</p>
      `;

      // Append to history container
      transactionContainer.prepend(historyItem);
    });
  });

  // Clear history button
  clearBtn.addEventListener("click", () => {
    transactionContainer.innerHTML = "";
  });