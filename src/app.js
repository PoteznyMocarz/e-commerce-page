let arrowLeft = document.getElementById("arrowLeft");
let arrowRight = document.getElementById("arrowRight");
let slideNumber = 1;
let closeIcon = document.getElementById("closeIcon");
let arrowLeftMobile = document.getElementById("arrowLeftMobile");
let arrowRightMobile = document.getElementById("arrowRightMobile");
let basketItems = 0;
let totalAmountItems = 0;

function showNextSlide() {
    let activeSlide = document.querySelector(".active-slide");
    if(slideNumber === 4) {
        slideNumber = 1;
    }

    else {
        slideNumber = slideNumber + 1;
    }

    activeSlide.classList.remove("active-slide");
    document.querySelector("#slide" + slideNumber).classList.add("active-slide");

    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.querySelector("#thumbnail" + slideNumber).classList.add("thumbnail-active");
}

arrowRight.addEventListener("click", showNextSlide)

function showNextSlideMobile() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    if(slideNumber === 4) {
        slideNumber = 1;
    }

    else {
        slideNumber = slideNumber + 1;
    }

    activeSlideMain.classList.remove("active-slide-main");
    document.querySelector("#slideMobile" + slideNumber).classList.add("active-slide-main");
}

arrowRightMobile.addEventListener("click", showNextSlideMobile)

function showPreviousSlide() {
    let activeSlide = document.querySelector(".active-slide");
    if(slideNumber === 1) {
        slideNumber = 4;
    }

    else {
        slideNumber = slideNumber - 1;
    }

    activeSlide.classList.remove("active-slide");
    document.querySelector("#slide" + slideNumber).classList.add("active-slide");

    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.querySelector("#thumbnail" + slideNumber).classList.add("thumbnail-active");
}

arrowLeft.addEventListener("click", showPreviousSlide)

function showPreviousSlideMobile() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    if(slideNumber === 1) {
        slideNumber = 4;
    }

    else {
        slideNumber = slideNumber - 1;
    }

    activeSlideMain.classList.remove("active-slide-main");
    document.querySelector("#slideMobile" + slideNumber).classList.add("active-slide-main");
}

arrowLeftMobile.addEventListener("click", showPreviousSlideMobile)

closeIcon.onclick = function() {
    document.getElementById("lightBox").classList.add("hidden")
}

document.getElementById("MainImgContainer").onclick = function() {
    if (window.innerWidth >= 450) {
        document.getElementById("lightBox").classList.remove("hidden")
    }
}

document.getElementById("thumbnail1Main").onclick = function() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    activeSlideMain.classList.remove("active-slide-main");
    document.getElementById("slideMobile1").classList.add("active-slide-main");
    
    let activeThumbnailMain = document.querySelector(".thumbnail-active-main");
    activeThumbnailMain.classList.remove("thumbnail-active-main");
    document.getElementById("thumbnail1Main").classList.add("thumbnail-active-main");
}

document.getElementById("thumbnail2Main").onclick = function() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    activeSlideMain.classList.remove("active-slide-main");
    document.getElementById("slideMobile2").classList.add("active-slide-main");
    
    let activeThumbnailMain = document.querySelector(".thumbnail-active-main");
    activeThumbnailMain.classList.remove("thumbnail-active-main");
    document.getElementById("thumbnail2Main").classList.add("thumbnail-active-main");
}

document.getElementById("thumbnail3Main").onclick = function() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    activeSlideMain.classList.remove("active-slide-main");
    document.getElementById("slideMobile3").classList.add("active-slide-main");
    
    let activeThumbnailMain = document.querySelector(".thumbnail-active-main");
    activeThumbnailMain.classList.remove("thumbnail-active-main");
    document.getElementById("thumbnail3Main").classList.add("thumbnail-active-main");
}

document.getElementById("thumbnail4Main").onclick = function() {
    let activeSlideMain = document.querySelector(".active-slide-main");
    activeSlideMain.classList.remove("active-slide-main");
    document.getElementById("slideMobile4").classList.add("active-slide-main");
    
    let activeThumbnailMain = document.querySelector(".thumbnail-active-main");
    activeThumbnailMain.classList.remove("thumbnail-active-main");
    document.getElementById("thumbnail4Main").classList.add("thumbnail-active-main");
}

document.getElementById("thumbnail1").onclick = function() {
    let activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    document.getElementById("slide1").classList.add("active-slide");
    
    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.getElementById("thumbnail1").classList.add("thumbnail-active");
    slideNumber = 1;
}

document.getElementById("thumbnail2").onclick = function() {
    let activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    document.getElementById("slide2").classList.add("active-slide");
    
    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.getElementById("thumbnail2").classList.add("thumbnail-active");
    slideNumber = 2;
}

document.getElementById("thumbnail3").onclick = function() {
    let activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    document.getElementById("slide3").classList.add("active-slide");
    
    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.getElementById("thumbnail3").classList.add("thumbnail-active");
    slideNumber = 3;
}

document.getElementById("thumbnail4").onclick = function() {
    let activeSlide = document.querySelector(".active-slide");
    activeSlide.classList.remove("active-slide");
    document.getElementById("slide4").classList.add("active-slide");
    
    let activeThumbnail = document.querySelector(".thumbnail-active");
    activeThumbnail.classList.remove("thumbnail-active");
    document.getElementById("thumbnail4").classList.add("thumbnail-active");
    slideNumber = 4;
}

document.getElementById("menuBtn").onclick = function() {
    document.getElementById("menu").classList.remove("hidden");
}

document.getElementById("menuClose").onclick = function() {
    document.getElementById("menu").classList.add("hidden");
}

function showBasket() {
    if (window.innerWidth >= 450) {
    document.getElementById("basketDesktop").classList.remove("hidden");
    document.getElementById("basketDesktop").classList.add("activeBasket");
    }

    else {
        document.getElementById("basketMobile").classList.remove("hidden");
        document.getElementById("basketMobile").classList.add("activeBasket");
    }
}

document.getElementById("cartIcon").addEventListener("click", showBasket)

function hideBasket() {
    if(document.getElementById("basketDesktop").classList.contains("activeBasket")) {
        document.getElementById("basketDesktop").classList.add("hidden");
    }
    
}

document.getElementById("basketDesktop").addEventListener("mouseleave", hideBasket)

function hideBasketMobile() {
    document.getElementById("basketMobile").classList.add("hidden")
}

document.getElementById("closeIconBasket").addEventListener("click", hideBasketMobile)

function addBasketItem() {
    basketItems = basketItems + 1;
    document.getElementById("itemsToAdd").innerText = basketItems;
}

document.getElementById("addItem").addEventListener("click", addBasketItem)

function removeBasketItem() {
    if(basketItems > 0) {
        basketItems = basketItems - 1;
    }
    document.getElementById("itemsToAdd").innerText = basketItems;
}

document.getElementById("removeItem").addEventListener("click", removeBasketItem)

function basketItemsAmount() {
    if(basketItems > 0 || basketItems === 0) {
        totalAmountItems = totalAmountItems + basketItems;
        if(totalAmountItems > 0) {
            document.getElementById("emptyBasketText").classList.add("hidden");
            document.getElementById("emptyBasketTextMobile").classList.add("hidden");
            document.getElementById("basketAmountTotal").classList.remove("hidden");
            document.getElementById("basketAmountTotal").innerText = totalAmountItems;
            document.getElementById("amountOfItems").innerText = totalAmountItems;
            document.getElementById("itemsInBasket").classList.remove("hidden");
            document.getElementById("checkBtn").classList.remove("hidden");
            document.getElementById("totalPrice").innerText = totalAmountItems * 125.00
            document.getElementById("amountOfItemsMobile").innerText = totalAmountItems;
            document.getElementById("itemsInBasketMobile").classList.remove("hidden");
            document.getElementById("checkBtnMobile").classList.remove("hidden");
            document.getElementById("totalPriceMobile").innerText = totalAmountItems * 125.00
        }
    }

    else {
        document.getElementById("emptyBasketText").classList.remove("hidden");
        document.getElementById("basketAmountTotal").classList.add("hidden");
        document.getElementById("itemsInBasket").classList.add("hidden");
        document.getElementById("checkBtn").classList.add("hidden");
    }

    basketItems = 0;
    document.getElementById("itemsToAdd").innerText = basketItems;
}

document.getElementById("submitBtn").addEventListener("click", basketItemsAmount)

function removeBasketItemsAll() {
    basketItems = 0;
    totalAmountItems = 0;
    document.getElementById("emptyBasketText").classList.remove("hidden");
    document.getElementById("basketAmountTotal").classList.add("hidden");
    document.getElementById("itemsInBasket").classList.add("hidden");
    document.getElementById("checkBtn").classList.add("hidden");
}

document.getElementById("deleteBtn").addEventListener("click", removeBasketItemsAll);

function removeBasketItemsAllMobile() {
    basketItems = 0;
    totalAmountItems = 0;
    document.getElementById("emptyBasketTextMobile").classList.remove("hidden");
    document.getElementById("basketAmountTotal").classList.add("hidden");
    document.getElementById("itemsInBasketMobile").classList.add("hidden");
    document.getElementById("checkBtnMobile").classList.add("hidden");
}

document.getElementById("deleteBtnMobile").addEventListener("click", removeBasketItemsAllMobile);