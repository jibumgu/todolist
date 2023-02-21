const btns = document.querySelector(".btn1");
const btnStyle = document.querySelectorAll(".bgbtn");
let btnsBoolean = true;
btns.addEventListener("click", () => {
  if (btnsBoolean === true) {
    const canvas1 = document.querySelector(".bgrain");
    if (canvas1.style.display === "none") {
      btnStyle[0].style.cssText =
        "position: relative;top: 2px;box-shadow: none; ";
      btnsBoolean = true;
    } else {
      btnStyle[0].style.cssText = "box-shadow: 3px 7px 3px black;";
      btnsBoolean = false;
    }
  } else {
    btnStyle[0].style.cssText =
      "position: relative;top: 2px;box-shadow: none; background-color: rgba(255, 255, 255, 0.8);";
    btnsBoolean = true;
  }
});

const btns2 = document.querySelector(".btn2");
let btnsBoolean2 = true;
btns2.addEventListener("click", () => {
  if (btnsBoolean2 === true) {
    const canvas2 = document.querySelector(".bgcloud");
    if (canvas2.style.display === "none") {
      btnStyle[1].style.cssText =
        "position: relative;top: 2px;box-shadow: none;";
      btnsBoolean2 = true;
    } else {
      btnStyle[1].style.cssText = "box-shadow: 3px 7px 3px black;";
      btnsBoolean2 = false;
    }
  } else {
    btnStyle[1].style.cssText = "position: relative;top: 2px;box-shadow: none;";
    btnsBoolean2 = true;
  }
});

const btns3 = document.querySelector(".btn3");
let btnsBoolean3 = true;
btns3.addEventListener("click", () => {
  if (btnsBoolean3 === true) {
    const canvas3 = document.querySelector(".bgsnow");
    if (canvas3.style.display === "none") {
      btnStyle[2].style.cssText =
        "position: relative;top: 2px;box-shadow: none;";
      btnsBoolean3 = true;
    } else {
      btnStyle[2].style.cssText = "box-shadow: 3px 7px 3px black;";
      btnsBoolean3 = false;
    }
  } else {
    btnStyle[2].style.cssText = "position: relative;top: 2px;box-shadow: none;";
    btnsBoolean3 = true;
  }
});

const btns4 = document.querySelector(".btn4");
let btnsBoolean4 = true;
btns4.addEventListener("click", () => {
  if (btnsBoolean4 === true) {
    const canvas4 = document.querySelector(".bgfire");
    if (canvas4.style.display === "none") {
      btnStyle[3].style.cssText =
        "position: relative;top: 2px;box-shadow: none;";
      btnsBoolean2 = true;
    } else {
      btnStyle[3].style.cssText = "box-shadow: 3px 7px 3px black;";
      btnsBoolean2 = false;
    }
  } else {
    btnStyle[3].style.cssText = "position: relative;top: 2px;box-shadow: none;";
    btnsBoolean2 = true;
  }
});
