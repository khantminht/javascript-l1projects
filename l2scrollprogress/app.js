var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){
    scrollpoint();
}

function scrollpoint(){
    // console.log('iam working');

    var getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop);

    var getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);

    var getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);

    var calcheight = getscrollheight - getclientheight;

    // var getfinalheight = Math.floor(getscrolltop * 100 / calcheight);
    // console.log(getfinalheight);

    var getfinalheight = Math.floor(getscrolltop / calcheight * 100);
    console.log(getfinalheight);

    getprogressbar.style.width = `${getfinalheight}%`
}


function printme(){
    window.print();
}


