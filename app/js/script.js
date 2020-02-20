let rus = './img/rus.png';

let happy = './img/happy.png'

let data = [
	{
  		title: 'Счастье для близких',
  		country: rus,
  		name: 'Миннекаева Гульназ Табрисовна',
  		text: 'Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая!',
  		icon: happy
  	},
  	{
  		title: 'Счастье для родных',
  		country: rus,
  		name: 'Чойбалсан Журавлиное Перо',
  		text: 'Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая!',
  		icon: happy
  	},
  	{
  		title: 'Счастье для друзей',
  		country: rus,
  		name: 'Чойбалсан Гульназ Перо',
  		text: 'Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая! Сделала сюрприз маме – она у меня самая лучшая!',
  		icon: happy
  	}
];

for (let i = 0; i < data.length; i++) {
	let slide_code = '<img src="'+data[i].icon+'"class="slide__icon">' +
						 '<div class="slide__content">' +
						 	'<div class="slide__title">'+data[i].title+'</div>' +
						 	'<div class="slide__name-cont"><img class="slide__country-icon" src="'+data[i].country+'"><span class="slide__name">'+data[i].name+'</div></div>' +
						 	'<p class="slide__text">'+data[i].text+'</p>' +
						 '</div>';

	let slider = document.querySelector('.slider__wrp');

	let slide = document.createElement('li');
	slide.classList.add('slider__slide','slide'); 
	slide.innerHTML = slide_code;
	slider.appendChild(slide);
}

let first_slide = document.querySelectorAll('.slide');
first_slide[0].classList.add('show');

var slides = document.querySelectorAll('.slider__wrp .slider__slide');
var currentSlide = 0;
var prevSlide = 0;
var slideInterval = setInterval(nextSlide,3000); // 2 секунды + 1 секунда от transition

function nextSlide(){
	slides[currentSlide].classList.remove('show');
  	slides[prevSlide].classList.remove('hide');
	prevSlide = (currentSlide)%slides.length;
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].classList.add('show');
  	slides[prevSlide].classList.add('hide');
} 