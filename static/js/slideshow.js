//Init the variables in use on the page
var slideShow = "";
var slideshowCards = [];
var currentSlide = 0;

//---HIGH LEVEL SLIDESHOW CONTROLS---//
function slideshowOn(adventureCard)
{
    
    //get the slideshow div
    slideshow = document.getElementsByClassName("slideshow")[0];
    //populate the slideshowCards array
    slideshowCards = document.getElementsByClassName("adventureCard");

    populateSlide(adventureCard)
    slideshow.classList.remove("disabled");
    currentSlide = getSlideNumberByAdventureCard(adventureCard);
}

function populateSlide(adventureCard)
{
    //Get the elements/strings on adventure card
    blurbElem = adventureCard.getElementsByClassName("blurb")[0]
    blurb = blurbElem.textContent
    imgElem = adventureCard.getElementsByClassName("galleryImage")[0]
    imgUrl = imgElem.src

    setSlideshowImage(imgUrl);
    setSlideshowBlurb(blurb);
}

function slideshowOff()
{
    slideshow.classList.add("disabled");
}
function slideshowFull()
{
    currentCard = slideshowCards[currentSlide];
    thumbUrl = currentCard.getElementsByClassName("galleryImage")[0].src
    fullUrl = thumbUrl.replace("/thumb/", "/full/")
    window.open(fullUrl,"_self")
}

function slideshowScroll(direction)
{
    if (direction == "back")
    {
        var limit = slideshowCards.length - 1;
        if (currentSlide == 0)
        {
            var newSlideIndex = limit;
        } else {
            var newSlideIndex = parseInt(currentSlide)-1;
        }
    }
    if (direction == "next")
    {
        var limit = slideshowCards.length - 1;
        if (currentSlide >= limit)
        {
            var newSlideIndex = 0;
        } else {
            var newSlideIndex = parseInt(currentSlide)+1;
        }
    }
    var adventureCards = document.getElementById("advCardCont").children;
    var newSlideCard = adventureCards[newSlideIndex];
    populateSlide(newSlideCard);
    currentSlide = newSlideIndex;
}


function setSlideshowBlurb(blurb)
{
    elem = document.getElementById("ssBlurb");
    elem.textContent = blurb;
}

function setSlideshowImage(url)
{
    elem = document.getElementById("ssImage");
    elem.src = url;
}

function getSlideNumberByAdventureCard(adventureCard)
{
    for (var i in slideshowCards)
    {
        if (slideshowCards[i] == adventureCard)
        {
            return i;
            break;
        }
    }
}
