const contactLink = document.getElementById("contact-link");
const contactTop = document.getElementById("contact-top");
const navBar = document.getElementById("navbar");
var comp = navBar.currentStyle || getComputedStyle(navBar, null);
let isHidden = true;

console.log(comp["font-size"], comp.height);
contactLink.onclick = () => {
  if (isHidden) {
    contactTop.style.top = comp.height;
    isHidden = false;
  } else {
    contactTop.style.top = "0";
    isHidden = true;
  }
};
