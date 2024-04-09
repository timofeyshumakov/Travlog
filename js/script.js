const slider = document.getElementById('slider');
const sliderContainer = document.getElementById('slider-container');
var currentTestimonialsCard = 1;
var currentExploreCard = 0;
var ExploreCardsOnBlock = 3;

document.getElementsByClassName("testimonials__main-content")[currentTestimonialsCard].style.display = 'flex';

sliderContainer.style.height = getComputedStyle(document.getElementsByClassName("services__cards")[0]).height.parseFloat;

slider.onmousedown = function(e) {
    offsetX = e.clientX;
    console.log(offsetX)
  var coords = getCoords(slider);
  var shiftX = e.pageX - coords.left;

  slider.style.position = 'relative';
  moveAt(e);


  function moveAt(e) {
    slider.style.left =(-offsetX+ e.clientX) + 'px';
    slider.style.top = coords.top;
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  slider.onmouseup = function() {
    document.onmousemove = null;
    slider.onmouseup = null;
  };

}

slider.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  let box = elem.getBoundingClientRect();
  return {
    left: box.left + pageXOffset
  };
}

var TestimonialsCards = document.getElementsByClassName("testimonials__main-content");
var pointer = document.getElementsByClassName("testimonials__scroll-pointer");

function previousTestimonialsCard(){
  if(currentTestimonialsCard > 0){
    TestimonialsCards[currentTestimonialsCard].style.display = 'none';
    currentTestimonialsCard--;
    TestimonialsCards[currentTestimonialsCard].style.display = 'flex';
    pointer[currentTestimonialsCard + 1].src='assets/img/testimonials/circle-white.svg';
    pointer[currentTestimonialsCard].src='assets/img/testimonials/circle-pink.svg';
  }
}

function nextTestimonialsCard(){
  if(currentTestimonialsCard < TestimonialsCards.length - 1){
    TestimonialsCards[currentTestimonialsCard].style.display = 'none';
    currentTestimonialsCard++;
    TestimonialsCards[currentTestimonialsCard].style.display = 'flex';
    pointer[currentTestimonialsCard - 1].src='assets/img/testimonials/circle-white.svg';
    pointer[currentTestimonialsCard].src='assets/img/testimonials/circle-pink.svg';
  }
}

var exploreCards = document.getElementsByClassName("explore-card");

function previousExploreCard(){
  if(currentExploreCard > 0){
    currentExploreCard--;
    exploreCards[ExploreCardsOnBlock + currentExploreCard].style.display = 'none';
    exploreCards[currentExploreCard].style.display = 'flex';
  }
}

function nextExploreCard(){
  if(currentExploreCard < ExploreCardsOnBlock - 2){
    exploreCards[currentExploreCard].style.display = 'none';
    exploreCards[ExploreCardsOnBlock + currentExploreCard].style.display = 'flex';
    currentExploreCard++;
  }
}

const scroll = document.getElementById('scroll');

scroll.addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
    for (let i = 0; i < TestimonialsCards.length; i++) {
      TestimonialsCards[i].style.display = 'none';
      pointer[i].src='assets/img/testimonials/circle-white.svg';
    }
    TestimonialsCards[index].style.display = 'flex';
    pointer[index].src='assets/img/testimonials/circle-pink.svg';
  }
});

//Отправка email в базу данных
function sendData() {
  let inputData = document.getElementById('email').value;
  fetch('http://example.com/saveData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: inputData })
  })
  .then(response => {
    console.log('Данные успешно отправлены в базу данных');
  })
  .catch(error => {
    console.error('Произошла ошибка при отправке данных:', error);
  });
}