/*
let myTitle = document.querySelector("title");
myTitle.textContent = "Hello world!";
*/
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pic_20230813111848.jpg") {
    myImage.setAttribute("src", "images/OIP-C.jpg");
  } else {
    myImage.setAttribute("src", "images/pic_20230813111848.jpg");
  }
};
