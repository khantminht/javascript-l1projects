var slides = document.getElementsByClassName('carousel-item');
// console.log(slides);

var dots = document.querySelectorAll(".dot");
// console.log(dots);

var currslide = 1;

// Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(currslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
    carousel(currslide += 1);
});

for(var q=0; q< dots.length; q++){
    
    dots[q].addEventListener('click',function(){

        currslide = this.getAttribute('data-bs-slide-to');
        carousel(currslide);

    });

}

carousel(currslide);

function carousel(slidenum){

    for(var x= 0; x< slides.length; x++){
        slides[x].style.display= "none";
    }

    for(var y= 0; y< dots.length; y++){
        dots[y].className='dot';
    }

    if(slidenum > slides.length){
        currslide =1;

    }else if(slidenum < 1){
        currslide= slides.length;
    }

    // console.log(currslide);

    slides[currslide-1].style.display = 'block';

    // dots[currslide-1].className= 'dot active';
    dots[currslide-1].classList.add('active');
}

