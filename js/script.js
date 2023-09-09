const el = document.getElementById("header__menu");
window.onresize = function(event) {
var getprop = window.getComputedStyle(el, null).getPropertyValue("margin-left");
getprop = getprop.replace('px','');
if (getprop<100){
document.getElementById("menu__list").style.flexDirection = "column";
document.getElementById("header__container").style.flexDirection = "column";
}
else{
document.getElementById("menu__list").style.flexDirection = "row";
document.getElementById("header__container").style.flexDirection = "row";
}
};