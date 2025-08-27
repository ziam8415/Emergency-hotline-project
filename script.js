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
console.log(callButtons);
for (const callButton of callButtons) {
  console.log(callButton);
  callButton.addEventListener("click", function (e) {
    let coinNum = Number(getInnerText("coin-num"));
    coinNum = coinNum - 20;
    document.getElementById("coin-num").innerText = coinNum;
    if (coinNum === 0) {
      for (let btn of callButtons) {
        console.log(btn);
        btn.disabled = true;
        btn.style.backgroundColor = "gray";
        btn.style.color = "white";
        btn.style.cursor = "not-allowed";
      }
    }
    let cardElement = e.currentTarget.parentNode.parentNode;
    let cardImg = cardElement.children[0].children[0].src;
    let cardTitle = cardElement.children[1].innerText;
    let cardNumber = cardElement.children[3].innerText;
    const now = new Date();
    const time = now.toLocaleTimeString();

    let div = document.createElement("div");
    div.innerHTML = `<div class="border-2 border-red-600 py-1 px-2 rounded-xl">
              <h2 class=" font-semiBold">${cardTitle}</h2>
              <div class="flex justify-between">
              <p class="text-gray-400">${cardNumber}</p>
              <p class="text-gray-400">${time}</p>
              </div>
            </div>`;

    let historyContainer = document.getElementById("history-con");
    historyContainer.appendChild(div);
  });
}
