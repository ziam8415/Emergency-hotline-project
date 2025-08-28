function getInnerText(id) {
  element = document.getElementById(id).innerText;
  return element;
}
let loveNum = parseInt(getInnerText("love-num"));
const loveButtons = document.getElementsByClassName("love");
for (let loveButton of loveButtons) {
  loveButton.addEventListener("click", function () {
    loveNum++;
    document.getElementById("love-num").innerText = loveNum;
  });
}

// call button

let callButtons = document.getElementsByClassName("call-btn");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function (e) {
    let coinNum = Number(getInnerText("coin-num"));
    if (coinNum >= 20) {
      coinNum = coinNum - 20;

      let cardElement = e.currentTarget.parentNode.parentNode;
      let cardTitle = cardElement.children[1].innerText;
      let cardNumber = cardElement.children[3].innerText;
      alert("Calling " + cardTitle + " " + cardNumber + "...");
      const now = new Date();
      const time = now.toLocaleTimeString();
      let div = document.createElement("div");
      div.innerHTML = `<div class="shadow-sm py-1 px-2 rounded-xl bg-[#fafafa]">
              <h2 class=" font-semiBold">${cardTitle}</h2>
              <div class="flex justify-between">
              <p class="text-gray-500">${cardNumber}</p>
              <p class="">${time}</p>
              </div>
            </div>`;

      let historyContainer = document.getElementById("history-con");
      historyContainer.appendChild(div);

      document.getElementById("coin-num").innerText = coinNum;
    } else {
      alert(
        "You haven't enough coins need at least 20 coins to make a call..."
      );
    }
  });
}

// clear button

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-con").innerHTML = "";
});

// copy button
let copyNum = parseInt(getInnerText("copy-num"));
let copyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function (e) {
    copyNum++;
    document.getElementById("copy-num").innerText = copyNum;
    let cardElement = e.currentTarget.parentNode.parentNode;
    let cardNumber = cardElement.children[3].innerText;
    navigator.clipboard.writeText(cardNumber);
    alert("Number coped : " + cardNumber);
  });
}
