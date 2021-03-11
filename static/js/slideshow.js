//Init the variables in use on the page
var slideShow = "";
var slideshowImages = [];
var currentSlide = 0;

//When the document is done loading, these will run
document.addEventListener("DOMContentLoaded", function(event)
{ 
    //get the slideshow div
    slideshow = document.getElementsByClassName("slideshow")[0];
    //populate the slideshowImages array
    slideshowImages = getSlideshowImages();
});

//---HIGH LEVEL SLIDESHOW CONTROLS---//
function slideshowOn(url)
{
    setSlideshowImage(url);
    slideshow.classList.remove("disabled");
    currentSlide = getSlideNumberByUrl(url);
}
function slideshowOff()
{
    slideshow.classList.add("disabled");
}
function slideshowFull()
{
    thumbUrl = slideshowImages[currentSlide];
    fullUrl = thumbUrl.replace("/thumb/", "/full/")
    window.open(fullUrl,"_self")
}
function slideshowBack()
{
    var limit = slideshowImages.length - 1;
    if (currentSlide == 0)
    {
        var newSlideIndex = limit;
    } else {
        var newSlideIndex = parseInt(currentSlide)-1;
    }
    var newSlideUrl = slideshowImages[newSlideIndex];
    setSlideshowImage(newSlideUrl);
    currentSlide = newSlideIndex;
}
function slideshowNext()
{
    var limit = slideshowImages.length - 1;
    if (currentSlide >= limit)
    {
        var newSlideIndex = 0;
    } else {
        var newSlideIndex = parseInt(currentSlide)+1;
    }
    var newSlideUrl = slideshowImages[newSlideIndex];
    setSlideshowImage(newSlideUrl);
    currentSlide = newSlideIndex;
}

function setSlideshowImage(url)
{
    elem = document.getElementById("ssImage");
    elem.src = url;
}

function getSlideshowImages()
{
    //get all gallery images
    elems = document.getElementsByClassName("galleryImage");
    var imageUrls = [];
    //loop through each gallery image
    for (var i in elems)
    {
        //get the url of the img tag
        elem = elems[i];
        img = elem.src;
        //drop the url into an array
        if (img == undefined)
        {
            continue;
        } else if ( img.indexOf("cover.jpg") > -1 ) {
            continue;
        } else {
            imageUrls.push(img);
        }
    }
    //Replace the gloabal array with the results of the loop
    return imageUrls;
}
function getSlideNumberByUrl(url)
{
    for (var i in slideshowImages)
    {
        if (slideshowImages[i] == url)
        {
            return i;
            break;
        }
    }
}
