{
    const welcome = () => {
        console.log("Hello my friend how are you");
    }
    
    const toggleBackgroundImage = () => {
        const dayPhoto = document.querySelector(".background");
        dayPhoto.classList.toggle("background-image");
        changeBackgroundButton.innerText = dayPhoto.classList.contains("background-image") ? "Noc" : "Dzień"
    };
    
    const toggleHelmetPhoto = () => {
        const helmetPhoto = document.querySelector(".background__image");
        helmetPhoto.classList.toggle("main--remove");
        removeHelmetPhotoButton.innerText = helmetPhoto.classList.contains("main--remove") ? "Pokaż" : "Ukryj"
    };
    
    const init = () =>{
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        const removeHelmetPhotoButton = document.querySelector(".js-removeImageButton");
        
        changeBackgroundButton.addEventListener("click", toggleBackgroundImage);
        
        removeHelmetPhotoButton.addEventListener("click", toggleHelmetPhoto);

        welcome();
    };
    
    init();
    
}
