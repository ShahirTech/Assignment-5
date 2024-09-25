document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});
const btnDonation = document.getElementById("donation");
btnDonation.addEventListener("click", function () {
  document.getElementById("cards").classList.remove("hidden");
  document.getElementById("history-container").classList.add("hidden");
  btnDonation.classList.add("bg-green-600");
  history.classList.remove("bg-green-600");
});

// donation for noakhali
const donation1 = document.getElementById("d1");
donation1.addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-1").value);
  const currentBalance = parseFloat(
    document.getElementById("balance").innerText
  );
  const balanceNoakhali = parseFloat(
    document.getElementById("noakhali").innerText
  );

  if (input <= 0 || !isNaN(input) === false) {
    alert("Inavid Amount");
    document.getElementById("input").value = "";
  } else if (currentBalance < input) {
    alert("insufficient balance");
    document.getElementById("input").value = "";
  }

  const newBalance = currentBalance - input;
  const newBalanceNoakhali = balanceNoakhali + input;

  document.getElementById("balance").innerText = newBalance;
  document.getElementById("noakhali").innerText = newBalanceNoakhali;

  document.getElementById("input-1").value = "";
  // for historytab

  const now = new Date();
  const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true, 
      timeZone: 'Asia/Dhaka' 
  };

  // Format the date string
  const formattedDate = now.toLocaleString('en-US', options).replace(',', '');
  const timezoneOffset = '+0600'; 
  const timezoneName = 'Bangladesh Standard Time';


  const historyItem = document.createElement("div");
  historyItem.className = "border-4 border-emerald-500 w-full p-5 rounded-2xl";
  historyItem.innerHTML = `

   <p class="py-2 text-lg font-bold">${input} Taka is Donated for Flood at Noakhali, Bangladesh</p>
   <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>

  `;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_1").showModal();
  // console.table({ input, newBalance, newBalanceNoakhali });
});

// donation for feni
const donation2 = document.getElementById("d2");
donation2.addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-2").value);
  const currentBalance = parseFloat(
    document.getElementById("balance").innerText
  );
  const balanceFeni = parseFloat(document.getElementById("feni").innerText);

  if (input <= 0 || !isNaN(input) === false) {
    alert("Inavid Amount");
    document.getElementById("input").value = "";
  } else if (currentBalance < input) {
    alert("insufficient balance");
    document.getElementById("input").value = "";
  }
  const newBalance = currentBalance - input;
  const newBalanceFeni = balanceFeni + input;

  document.getElementById("balance").innerText = newBalance;
  document.getElementById("feni").innerText = newBalanceFeni;

  document.getElementById("input-2").value = "";
  // for historytab

  const now = new Date();
  const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true, 
      timeZone: 'Asia/Dhaka' 
  };

  // Format the date string
  const formattedDate = now.toLocaleString('en-US', options).replace(',', '');
  const timezoneOffset = '+0600'; 
  const timezoneName = 'Bangladesh Standard Time';


  const historyItem = document.createElement("div");
  historyItem.className = "border-4 border-emerald-500 w-full p-5 rounded-2xl";
  historyItem.innerHTML = `
  
     <p class="py-2 text-lg font-bold">${input} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
     <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>
  
    `;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_2").showModal();
  // console.table({ input, newBalance, newBalanceFeni });
});

// donation for quota
const donation3 = document.getElementById("d3");
donation3.addEventListener("click", function () {
  const input = parseFloat(document.getElementById("input-3").value);
  const currentBalance = parseFloat(
    document.getElementById("balance").innerText
  );
  const balanceQuota = parseFloat(document.getElementById("quota").innerText);

  if (input <= 0 || !isNaN(input) === false) {
    alert("Inavid Amount");
    document.getElementById("input").value = "";
  } else if (currentBalance < input) {
    alert("insufficient balance");
    document.getElementById("input").value = "";
  }
  const newBalance = currentBalance - input;
  const newBalanceQuota = balanceQuota + input;

  document.getElementById("balance").innerText = newBalance;
  document.getElementById("quota").innerText = newBalanceQuota;

  document.getElementById("input-3").value = "";
  // for historytab

  const now = new Date();
  const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true, 
      timeZone: 'Asia/Dhaka' 
  };

  // Format the date string
  const formattedDate = now.toLocaleString('en-US', options).replace(',', '');
  const timezoneOffset = '+0600'; 
  const timezoneName = 'Bangladesh Standard Time';


  const historyItem = document.createElement("div");
  historyItem.className = "border-4 border-emerald-500 w-full p-5 rounded-2xl";
  historyItem.innerHTML = `
    
       <p class="py-2 text-lg font-bold">${input} Taka Aid is Donated for Injured in the Quota Movement</p>
       <p>Date: ${formattedDate} GMT${timezoneOffset} (${timezoneName})</p>
    
      `;
  const historyContainer = document.getElementById("history-container");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);

  document.getElementById("my_modal_3").showModal();
  // console.table({ input, newBalance, newBalanceQuota });
});

// history-tab
const history = document.getElementById("history");
history.addEventListener("click", function () {
  history.classList.add("bg-green-600");
  btnDonation.classList.remove("bg-green-600");
  document.getElementById("cards").classList.add("hidden");
  document.getElementById("history-container").classList.remove("hidden");
  document.getElementById("footer").classList.add("hidden");
});
