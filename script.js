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
