console.log("Hello my friend how are you");

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let dayPhoto = document.querySelector(".background");
let removeHelmetPhotoButton = document.querySelector(".js-removeImageButton");
let helmetPhoto = document.querySelector(".background__image");


changeBackgroundButton.addEventListener("click", () => {
    dayPhoto.classList.toggle("background-image");

    changeBackgroundButton.innerText = dayPhoto.classList.contains("background-image") ? "Noc" : "Dzień"
});

removeHelmetPhotoButton.addEventListener("click", () => {
    helmetPhoto.classList.toggle("main--remove");

    removeHelmetPhotoButton.innerText = helmetPhoto.classList.contains("main--remove") ? "Pokaż" : "Ukryj"
});



