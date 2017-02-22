//header function
var head,rate,nav;
function yScroll(){
	head = document.getElementById("header");
    rate = document.getElementById("button-rate");
    nav = document.getElementById("sidenav");

	yPos = window.pageYOffset;
	if(yPos > 10){
		head.style.backgroundColor ="#1C1B1B"; 
		head.style.opacity ="1";
        if ($(window).width() > 1024){
            rate.style.marginRight ="8%";
            nav.style.marginRight ="3%";
        }   
        if ($(window).width() <= 1024){
            rate.style.marginTop ="14px";
        }   
	} 
    else {
		head.style.backgroundColor ="#1C1B1B";
		head.style.opacity ="1";  
        if ($(window).width() > 1024){
            rate.style.marginRight ="-140px";
            nav.style.marginRight ="8%";
        }
        if ($(window).width() <= 1024){
            rate.style.marginTop ="-45px";
        }     
	}
}
window.addEventListener("scroll", yScroll); 

//side navi bar
function openNav() {
    if ($(window).width() > 480){
        document.getElementById("sidenav").style.width = "120px";
    }  
    if ($(window).width() <= 480){
        document.getElementById("sidenav").style.width = "100px";
    }   
   
    document.getElementById("menu-icon").style.width = "0px";
    document.getElementById("sidenav").className = "shadow";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("menu-icon").style.width = "42px";
    document.getElementById("sidenav").className = "noshadow";
}

//mouseover left girl image
var move = true;
function mouseOver(){
    if ($(window).width() > 768){
        if(move == true){
              document.getElementById("left-inner-choice").style.backgroundPosition = "+190px bottom";
        }
    }
}
function mouseOut(){
    if ($(window).width() > 768){
        if(move == true){
		      document.getElementById("left-inner-choice").style.backgroundPosition = "+240px bottom";
        }
    }
}
//mouseover right girl image
function mouseOver2(){
    if ($(window).width() > 768){
        if(move == true){
    	   document.getElementById("right-inner-choice").style.backgroundPosition = "-200px bottom";
        }
    }
}
function mouseOut2(){
    if ($(window).width() > 768){
        if(move == true){
    	   document.getElementById("right-inner-choice").style.backgroundPosition = "-250px bottom";
        }
    }
}

//left-clik
function leftclick() 
{
    move = false;
    document.getElementById("left-inner-choice").style.width = "95%";
    document.getElementById("left-inner-choice").style.backgroundSize = "60%";
    document.getElementById("left-inner-choice").style.backgroundPosition = "right bottom";
    document.getElementById("left-description").style.marginLeft = "3%";
    document.getElementById("exit-left").style.display = "block";
    document.getElementById("left-button").style.display = "none";	

    document.getElementById("right-inner-choice").style.width = "5%";
    document.getElementById("right-inner-choice").style.opacity = "0.5";
    document.getElementById("right-description").style.display = "none";	
    document.getElementById("borrower-button").style.display = "none";
    document.getElementById("right-inner-choice").style.backgroundSize = "1150%";	
}
//right-clik
function rightclick() 
{
    move = false;
    document.getElementById("right-inner-choice").style.width = "95%";
    document.getElementById("right-inner-choice").style.backgroundSize = "60%";
    document.getElementById("right-inner-choice").style.backgroundPosition = "left bottom";
    document.getElementById("right-description").style.marginRight = "3%";
    document.getElementById("exit-right").style.display = "block";
    document.getElementById("right-button").style.display = "none";	

    document.getElementById("left-inner-choice").style.width = "5%";
    document.getElementById("left-inner-choice").style.opacity = "0.5";
    document.getElementById("left-description").style.display = "none";	
    document.getElementById("investor-button").style.display = "none";
    document.getElementById("left-inner-choice").style.backgroundPosition = "-470px bottom";
    document.getElementById("left-inner-choice").style.backgroundSize = "1150%";
}

//exit-left-clik
function exit_leftclick() 
{
    move = true;
    document.getElementById("left-inner-choice").style.width = "50%";
    document.getElementById("left-inner-choice").style.backgroundSize = "100%";
    document.getElementById("left-inner-choice").style.backgroundPosition = "+250px bottom";
    document.getElementById("left-description").style.marginLeft = "15%";
    document.getElementById("exit-left").style.display = "none";
    document.getElementById("left-button").style.display = "block";	

    document.getElementById("right-inner-choice").style.width = "50%";
    document.getElementById("right-inner-choice").style.opacity = "1";
    document.getElementById("right-description").style.display = "block";
    document.getElementById("borrower-button").style.display = "block";	
    document.getElementById("right-inner-choice").style.backgroundSize = "100%";	
}
//exit-right-clik
function exit_rightclick() 
{
    move = true;
    document.getElementById("right-inner-choice").style.width = "50%";
    document.getElementById("right-inner-choice").style.backgroundSize = "100%";
    document.getElementById("right-inner-choice").style.backgroundPosition = "-250px bottom";
    document.getElementById("right-description").style.marginRight = "15%";
    document.getElementById("exit-right").style.display = "none";
    document.getElementById("right-button").style.display = "block";	
    document.getElementById("left-inner-choice").style.backgroundPosition = "+250px bottom";

    document.getElementById("left-inner-choice").style.width = "50%";
    document.getElementById("left-inner-choice").style.opacity = "1";
    document.getElementById("left-description").style.display = "block";
    document.getElementById("investor-button").style.display = "block";	
    document.getElementById("left-inner-choice").style.backgroundSize = "100%";	
}
				
