

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;

    }
      
    static Start(arr){
        if(arr){

            if(arr && arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); 
                Carousel._interval = setInterval(function(){ Carousel.Next(); },6000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

static Next(e){
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }

        let itemAtual = carouselArr[Carousel._sequence];
        let linkCarousel = document.getElementById("carousel-links");
        let divCarousel = document.getElementById("carousel");
        divCarousel.style.backgroundImage = "url('img/" + itemAtual.image + "')";
        linkCarousel.href = itemAtual.url;
        divCarousel.style.backgroundRepeat = "no-repeat";
        divCarousel.style.backgroundSize = "contain"; 
        divCarousel.style.backgroundPosition = "center";

        let divTitle = document.getElementById("carousel-title");
        divTitle.innerHTML = `<a href="${itemAtual.url}">${itemAtual.title}</a>`;
        
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static Previous(e){

        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }

        Carousel._sequence--;
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1;
        }

        let itemAtual = carouselArr[Carousel._sequence];
        let linkCarousel = document.getElementById("carousel-links");
        let divCarousel = document.getElementById("carousel");
        divCarousel.style.backgroundImage = "url('img/" + itemAtual.image + "')";
        linkCarousel.href = itemAtual.url;
        divCarousel.style.backgroundRepeat = "no-repeat";
        divCarousel.style.backgroundSize = "contain"; 
        divCarousel.style.backgroundPosition = "center";
        
        let divTitle = document.getElementById("carousel-title");
        divTitle.innerHTML = `<a href="${itemAtual.url}">${itemAtual.title}</a>`;
    }


};
