const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Work on buttons
const prevButt = document.querySelector('#prevButt');
const nextButt = document.querySelector('#nextButt');

//Add a counter to monitor on which image we're on
let counter = 1;

//Set the width to slide to know how do we need to slide
//It will give us the original width back
const size = carouselImages[0].clientWidth;

//The carousel will start from the first image and will move one picture at a time
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Add Button Listeners using ES6
nextButt.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //Add 1 to the counter
    counter++;
    //To test the function: console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevButt.addEventListener('click',()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //Add 1 to the counter
    counter--;
    //To test the function: console.log(counter);
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

//How do we loop from the end to the begin
carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone') {
        //When images carousel finishes, remove the transition effect to jump directly to the clone 
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});