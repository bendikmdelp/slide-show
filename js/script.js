const images = document.querySelectorAll('.slide-show__image-box');
const nextButton = document.querySelector('.slide-show__next-image');
const previousButton = document.querySelector('.slide-show__previous-image');
const goToImageButton = document.querySelectorAll('.image-button__go-to')
/* const goToImage1 = document.querySelector('#btn1');
const goToImage2 = document.querySelector('#btn2');
const goToImage3 = document.querySelector('#btn3');
const goToImage4 = document.querySelector('#btn4');
const goToImage5 = document.querySelector('#btn5');
const goToImage6 = document.querySelector('#btn6');
const goToImage7 = document.querySelector('#btn7');
const goToImage8 = document.querySelector('#btn8');
const goToImage9 = document.querySelector('#btn9');
const goToImage10 = document.querySelector('#btn10'); */

let currentImage = 0;

const toggleImageVisible = 'slide-show__image-box--visible';

nextButton.addEventListener('click', handleNextBtnClick);
previousButton.addEventListener('click', handlePrevBtnClick);
goToImageButton.forEach(button =>{
	button.addEventListener('click', handleGoToImageClick)
})

/* goToImage1.addEventListener('click', handleGoToImageClick)
goToImage2.addEventListener('click', handleGoToImageClick)
goToImage3.addEventListener('click', handleGoToImageClick)
goToImage4.addEventListener('click', handleGoToImageClick)
goToImage5.addEventListener('click', handleGoToImageClick)
goToImage6.addEventListener('click', handleGoToImageClick)
goToImage7.addEventListener('click', handleGoToImageClick)
goToImage8.addEventListener('click', handleGoToImageClick)
goToImage9.addEventListener('click', handleGoToImageClick)
goToImage10.addEventListener('click', handleGoToImageClick) */

window.addEventListener('keyup', handleKeyUp)

images[currentImage].classList.toggle(toggleImageVisible);;

function handleNextBtnClick() {
	images[currentImage].classList.toggle(toggleImageVisible);;
	if((currentImage+1)===images.length){
		currentImage = 0;
		images[currentImage].classList.toggle(toggleImageVisible);;
	}else{
		currentImage += 1;
		images[currentImage].classList.toggle(toggleImageVisible);;
	}
}


function handlePrevBtnClick() {
	images[currentImage].classList.toggle(toggleImageVisible);;
	if(currentImage===0){
		currentImage = (images.length-1);
		images[currentImage].classList.toggle(toggleImageVisible);;
	}else{
		currentImage -= 1;
		images[currentImage].classList.toggle(toggleImageVisible);;
	}
	
}

function handleGoToImageClick(event) {
	let currentTarget = event.currentTarget;
	images[currentImage].classList.toggle(toggleImageVisible);;
	switch (currentTarget.id) {
		case 'btn1':
			currentImage=0;
			images[currentImage].classList.toggle(toggleImageVisible);;
			break;
		case 'btn2':
			currentImage=1;
			images[currentImage].classList.toggle(toggleImageVisible);;
			break;
		case 'btn3':
			currentImage=2
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn4':
			currentImage=3
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn5':
			currentImage=4
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn6':
			currentImage=5
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn7':
			currentImage=6
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn8':
			currentImage=7
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn9':
			currentImage=8
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		case 'btn10':
			currentImage=9
			images[currentImage].classList.toggle(toggleImageVisible);;
		break;
		default:

			break;
	}

}

function handleKeyUp(event) {
	if(event.key==='ArrowLeft' || event.key==='ArrowRight'){
		images[currentImage].classList.toggle(toggleImageVisible);;;
		if(event.key==='ArrowLeft'){
			if(currentImage===0){
				currentImage = (images.length-1);
				images[currentImage].classList.toggle(toggleImageVisible);;
			}else{
				currentImage -= 1;
				images[currentImage].classList.toggle(toggleImageVisible);;
			}
			
		}else if(event.key==='ArrowRight'){
			if((currentImage+1)===images.length){
				currentImage = 0;
				images[currentImage].classList.toggle(toggleImageVisible);;
			}else{
				currentImage += 1;
				images[currentImage].classList.toggle(toggleImageVisible);;
			}
		}
	}
}