{
    const welcome = () => {
        console.log("Hello my friend how are you");
    }

    const onChangeBackgroundButton = () => {
        const dayPhoto = document.querySelector(".background");
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        dayPhoto.classList.toggle("background-image");
        changeBackgroundButton.innerText = dayPhoto.classList.contains("background-image") ? "Noc" : "Dzień"
    };

    const onRemoveHelmetPhotoButton = () => {
        const helmetPhoto = document.querySelector(".background__image");
        const removeHelmetPhotoButton = document.querySelector(".js-removeImageButton");
        helmetPhoto.classList.toggle("main--remove");
        removeHelmetPhotoButton.innerText = helmetPhoto.classList.contains("main--remove") ? "Pokaż" : "Ukryj"
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        const removeHelmetPhotoButton = document.querySelector(".js-removeImageButton");

        changeBackgroundButton.addEventListener("click", onChangeBackgroundButton);

        removeHelmetPhotoButton.addEventListener("click", onRemoveHelmetPhotoButton);

        welcome();
    };

    init();

}
