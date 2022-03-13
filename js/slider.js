let slidingIntervalTime = 2000;
let sliderIntervalId;

//To display slider images to UI
const showSlider = (images) => {
    let sliderIndex = 0;
    let isSliderEnabled = false;
    const sliderContainer = document.getElementById('slider');
    const sliderImg = document.getElementById("slider-img");

    //This block of code bellow will dynamically set the slider image url
    sliderIntervalId = setInterval(() => {
        if (sliderIndex >= images.length) {
            sliderIndex = 0;
        }
        sliderImg.setAttribute('src', images[sliderIndex].imgUrl)
        sliderIndex++;
        if (!isSliderEnabled) {
            sliderContainer.classList.remove('d-none');
            isSliderEnabled = true;
        }
    }, slidingIntervalTime);
}

//To set sliding interval
const setDurationHandler = () => {
    const intervalInput = document.getElementById('interval-input').value;
    if (intervalInput) {
        stopSlidingHandler();
        slidingIntervalTime = intervalInput * 1000;
        loadSliderImages();
    }
}

//To stop sliding 
const stopSlidingHandler = () => {
    clearInterval(sliderIntervalId);
}

// Loading data 
const loadSliderImages = async() => {
    let imgData = await fetch('data/slider-images.json');
    sliderImages = await imgData.json();
    showSlider(sliderImages);
}

loadSliderImages();