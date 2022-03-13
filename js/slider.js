//To display slider images to UI
const showSlider = (images) => {
    let sliderIndex = 0;
    let isSliderEnabled = false;
    const sliderContainer = document.getElementById('slider');
    const sliderImg = document.getElementById("slider-img");

    //This block of code bellow will dynamically set the slider image url
    setInterval(() => {
        if (sliderIndex >= images.length) {
            sliderIndex = 0;
        }
        sliderImg.setAttribute('src', images[sliderIndex].imgUrl)
        sliderIndex++;
        if (!isSliderEnabled) {
            sliderContainer.classList.remove('d-none');
            isSliderEnabled = true;
        }
    }, 2000);
}

// Loading data 
const loadSliderImages = async() => {
    let imgData = await fetch('data/slider-images.json');
    sliderImages = await imgData.json();
    showSlider(sliderImages);
}

loadSliderImages();