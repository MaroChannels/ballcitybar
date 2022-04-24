const validationInput = document.querySelector('input');


validationInput.addEventListener('input', (e) => {
  
    if(e.target.value.length >= 3){
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
})


const slidingNewsletter = document.querySelector('.slide-in');

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;

    // console.log(scrollTop, clientHeight);

    const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

    console.log(topElementToTopViewport);

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        slidingNewsletter.classList.add('active')
    }
})