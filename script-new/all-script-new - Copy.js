//header function
var head,menu;
function yScroll(){
	head = document.getElementById("header");
		
	yPos = window.pageYOffset;
	if(yPos > 10){
		head.style.backgroundColor ="black";
		head.style.opacity ="0.7";
					
	} else {
		head.style.backgroundColor ="transparent";
		head.style.opacity ="1";
	}
}
window.addEventListener("scroll", yScroll);	


var move = true;

//mouseover left girl image
function mouseOver() {
    if(move == true){
        document.getElementById("left-inner-choice").style.backgroundPosition = "+190px bottom";
    }
}
function mouseOut() {
    if(move == true){
		document.getElementById("left-inner-choice").style.backgroundPosition = "+240px bottom";
    }
}
//mouseover right girl image
function mouseOver2() {
    if(move == true){
	   document.getElementById("right-inner-choice").style.backgroundPosition = "-200px bottom";
    }
}
function mouseOut2() {
     if(move == true){
	   document.getElementById("right-inner-choice").style.backgroundPosition = "-250px bottom";
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
    document.getElementById("right-description").style.display = "none";	
    document.getElementById("borrower-button").style.display = "none";
    document.getElementById("right-inner-choice").style.backgroundSize = "750px";	
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
    document.getElementById("left-description").style.display = "none";	
    document.getElementById("investor-button").style.display = "none";
    document.getElementById("left-inner-choice").style.backgroundPosition = "-450px bottom";
    document.getElementById("left-inner-choice").style.backgroundSize = "750px";
}

//exit-left-clik
function exit_leftclick() 
{
    move = true;
    document.getElementById("left-inner-choice").style.width = "50%";
    document.getElementById("left-inner-choice").style.backgroundSize = "100%";
    document.getElementById("left-inner-choice").style.backgroundPosition = "+250px bottom";
    document.getElementById("left-description").style.marginLeft = "25%";
    document.getElementById("exit-left").style.display = "none";
    document.getElementById("left-button").style.display = "block";	

    document.getElementById("right-inner-choice").style.width = "50%";
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
    document.getElementById("right-description").style.marginRight = "25%";
    document.getElementById("exit-right").style.display = "none";
    document.getElementById("right-button").style.display = "block";	
    document.getElementById("left-inner-choice").style.backgroundPosition = "+250px bottom";

    document.getElementById("left-inner-choice").style.width = "50%";
    document.getElementById("left-description").style.display = "block";
    document.getElementById("investor-button").style.display = "block";	
    document.getElementById("left-inner-choice").style.backgroundSize = "100%";	
}
				
