var getacctitles = document.getElementsByClassName("acctitle");

var getacccontents = document.querySelectorAll(".acccontent");

for( var x=0; x< getacctitles.length; x++){
    // console.log(x);

    getacctitles[x].addEventListener('click',function(){
        // console.log(e.target);
        // console.log(this);

        this.classList.toggle("active");

        var getcontent = this.nextElementSibling;

        if(getcontent.style.height){
            getcontent.style.height= null //beware can't set 0 in height;
        }else{

            var contentheight = getcontent.scrollHeight;
            getcontent.style.height= contentheight+"px";
        }

    });

    if(getacctitles[x].classList.contains("active")){
        getacccontents[x].style.height= getacccontents[x].scrollHeight+"px";
    }

}