
const navHeartCounter = document.getElementById("hart_nav"); // navbar hard icon
const heartIcons = document.getElementsByClassName("hart");// card hard Icon
const countNav = document.getElementById("count_nav"); // navbar  (card call countter)

const count_Nav = document.getElementById("copy_nav"); // navbar  (copy_nav)
const copyButtons = document.querySelectorAll(".copy_btn");

const callButtons = document.querySelectorAll(".call_btn");  


const CallHistory = document.getElementById("CallHistory");

const now = new Date();
const timeString = now.toLocaleTimeString();

// service card hard icon functionally with navbar hartCount
let heartCount = 0;
for (let i = 0; i < heartIcons.length; i++) {
  heartIcons[i].addEventListener("click", function() {
    heartCount++; 
    navHeartCounter.innerText = heartCount;  
  });
}


 let count_nav = 100; // navbar  (card call countter) initial value
 
 for (let i = 0; i < callButtons.length; i++) {
   callButtons[i].addEventListener("click", function() {
     count_nav -= 20;                
     countNav.innerText = count_nav;
    
     if(count_nav<20){
       alert("আপনার পর্যাপ্ত কয়েন নেই।কল করতে কমপক্ষে ২০ কয়েন লাগবে")

       for (let j = 0; j < callButtons.length; j++) {
       
         callButtons[j].disabled = true;
         callButtons[j].classList.add("bg-red-600");
          
      }}});
     }

// service card copy icon functionally with navbar copy

let copy_Nav = 0;

for(let i=0; i< copyButtons.length; i++){
  copyButtons[i].addEventListener("click", function(){
    copy_Nav++;
    count_Nav.innerText=copy_Nav;
  
  })
}

// service card copy alert

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
     
       const card = btn.closest(".service_card");
      const serviceNumber = card.querySelector(".callNo").innerText;
      alert(`নম্বর কপি হয়েছে: ${serviceNumber}`); 
        });
  });


  // copy button click and copy service no

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Find the closest parent card
      const serviceCard = btn.closest(".service_card");

      // Get the call number inside that card
      const callNo = serviceCard.querySelector(".callNo").innerText;

      // Copy to clipboard
      navigator.clipboard.writeText(callNo).then(() => {
        alert(`Copied: ${callNo}`);
      }).catch(err => {
        console.error("Failed to copy: ", err);
      });
    });
  });





 // callButton Alert

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
     
       const card = btn.closest(".service_card");
      const serviceName = card.querySelector("h4").innerText;
      const serviceNumber = card.querySelector(".callNo").innerText;
      alert(`Calling ${serviceName}, ${serviceNumber}....
            ${timeString}`); // local time show use from top variable
        });
  });


// transaction section
  const transactionContainer = document.getElementById("transaction_container");
  const clearBtn = document.getElementById("clear_btn");

  callButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
     
      const card = btn.closest(".service_card");

      const serviceName = card.querySelector("h4").innerText;
      const serviceNumber = card.querySelector(".callNo").innerText;

      const historyItem = document.createElement("div");
      historyItem.className =
        "flex items-center justify-center bg-[#fafafa] rounded-lg px-2 py-2";

      historyItem.innerHTML = `
        <div>
          <h1 class="text-black text-sm">${serviceName}</h1>
           <p class="text-sm text-gray-700">${serviceNumber}</p>
        </div>
       <p class="text-gray-400">${timeString}</p> 
      `;

    
      transactionContainer.prepend(historyItem);
    });
  });

  // Clear history button
  clearBtn.addEventListener("click", () => {
    transactionContainer.innerHTML = "";
  });