

// function goingRight() {
//     document.getElementById("gif").src ="https://www.animatedimages.org/data/media/1635/animated-walking-image-0047.gif"
//     setTimeout(function(){ 
//         document.getElementById("gif").src ="petition.png"
//      }, 1000);
// }
document.getElementById("outer-wrapper").onscroll = function (e) {
    var y=0;
    function goingRight() {
        document.getElementById("gif").src ="https://www.animatedimages.org/data/media/1635/animated-walking-image-0047.gif"
        
        setTimeout(function(){ 
            document.getElementById("gif").src ="stickman.png"
            // document.getElementById("ball").style.transform="rotate(90deg) scaleX(-1)"
         }, 1000);
    }
    function goingLeft() {
        document.getElementById("gif").src ="https://www.animatedimages.org/data/media/1635/animated-walking-image-0047.gif"
        
        setTimeout(function(){ 
            document.getElementById("gif").src ="stickman.png"
            // document.getElementById("ball").style.transform="rotate(90deg) scaleX(1)"
         }, 1000);
    }
    var lastScrollTop = 0;
    document.getElementById("outer-wrapper").onscroll =function(event){
        var st =document.getElementById("outer-wrapper").scrollTop;

        if(st>lastScrollTop){
            document.getElementById("outer-wrapper").addEventListener("scroll", goingRight) 
            document.getElementById("ball").style.transform="rotate(90deg) scaleX(-1)"
            
          
        }
        else{
            document.getElementById("outer-wrapper").addEventListener("scroll", goingLeft)
            document.getElementById("ball").style.transform="rotate(90deg) scaleX(1)"
            
           
        }
        lastScrollTop = st;
    }
    
};



// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        // downscroll code
//    } else {
//       // upscroll code
//    }
//    lastScrollTop = st;
// });