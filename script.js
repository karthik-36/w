///header
var isSmall =false;
var isMedium = false;
var isLarge = false;
document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
    
    }
};

console.log("alive");
window.onscroll = function(){
	const docScrollTop = document.documentElement.scrollTop;   
	if(window.innerWidth>991){
		if(docScrollTop>100){
			document.querySelector("header").classList.add("fixed");
		}else{
			document.querySelector("header").classList.remove("fixed")
		}
	}







}



window.onload = function(){

var preloader = document.getElementById('loading');

	preloader.style.display = 'none';

var navbar = document.querySelector(".navbar");
		a=navbar.querySelectorAll("a");
   console.log("helloonload " +a);


   a.forEach(function(element){
   	element.addEventListener("click",function(){
   		//console.log(this.getAttribute("href"));
   		for (var i = 0; i < a.length; i++) {
   			a[i].classList.remove("active");
   		}


   		this.classList.add("active");
   		document.querySelector(".navbar").classList.toggle("show");

   	})
   })






const hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click",function(){
	console.log("clicked");
	//document.querySelector(".navbar").classList.toggle("show");
document.querySelector(".navbar").setAttribute("display","none");
})





var onresize = function() {


   width = document.body.clientWidth;
   height = document.body.clientHeight;
   console.log("width " + width);

  if(width<531){
	document.getElementById("p1").setAttribute("height",200);
	document.getElementById("p2").setAttribute("height",250);
	document.getElementById("p3").setAttribute("height",250);
	document.getElementById("p4").setAttribute("height",250);
	document.getElementById("p5").setAttribute("height",250);
	document.getElementById("p6").setAttribute("height",300);
  }else{

  		document.getElementById("p1").setAttribute("height",490);
	document.getElementById("p2").setAttribute("height",490);
	document.getElementById("p3").setAttribute("height",490);
	document.getElementById("p4").setAttribute("height",490);
	document.getElementById("p5").setAttribute("height",490);
	document.getElementById("p6").setAttribute("height",600);
  }

////////////video

var videocontainer = document.getElementById('video');
var videosource = document.getElementById('videosource');
var small = 'finalsmall.mp4';
var medium = 'finalmedium.mp4';
var large = 'n.mp4';


if(width<=600 && isSmall==false){
	console.log("trigger small");
    videocontainer.pause();
    videosource.setAttribute('src', small);
    videocontainer.load();
    videocontainer.play();
    isSmall = true;
    isMedium = false;
    isLarge = false;
}
else if(width <= 1300 && width>= 600 && isMedium == false){
	console.log("trigger medium");
    videocontainer.pause();
    videosource.setAttribute('src', medium);
    videocontainer.load();
    videocontainer.play();
    isMedium = true;
    isSmall = false;
    isLarge = false;

}else if(width >= 1300 && isLarge == false){
    console.log("trigger large");
    videocontainer.pause();
    videosource.setAttribute('src', large);
    videocontainer.load();
    videocontainer.play();
    isLarge = true;
    isSmall = false;
    isMedium = false;

}


///////////////


if(width<750){

	var x = document.getElementById("skill-image");
 
    x.style.display = "none";



}
else{
var x = document.getElementById("skill-image");
 
    x.style.display = "block";

}







}
window.addEventListener("resize", onresize);





console.log("window width" + window.innerWidth);
if(screen.width<550){
	document.getElementById("p1").setAttribute("height",250);
	document.getElementById("p2").setAttribute("height",250);
	document.getElementById("p3").setAttribute("height",250);
	document.getElementById("p4").setAttribute("height",250);
	document.getElementById("p5").setAttribute("height",250);
	document.getElementById("p6").setAttribute("height",300);
}




/////////////////////////


var videocontainer = document.getElementById('video');
var videosource = document.getElementById('videosource');
var small = 'finalsmall.mp4';
var medium = 'finalmedium.mp4';
var large = 'n.mp4';


if(window.innerWidth >= 1300 ){
   console.log(" set trigger large");
    videocontainer.pause();
    videosource.setAttribute('src', large);
    videocontainer.load();
    videocontainer.play();

}else if(window.innerWidth >= 600 && window.innerWidth <= 1300 ){
	console.log(" set trigger medium");
    videocontainer.pause();
    videosource.setAttribute('src', medium);
    videocontainer.load();
    videocontainer.play();

}else{
	console.log(" set trigger small");
    videocontainer.pause();
    videosource.setAttribute('src', small);
    videocontainer.load();
    videocontainer.play();

}


////////////////////////

}










//console.log("innder "+window.innerWidth);

//if(window.innerWidth<731){
//document.getElementById("p1").setAttribute("height",20);
//}





/*


if(screen.width<1000){
	 var video = document.getElementById('video');
   video.src = "finalsmall.mp4";
   video.play();
}else if (screen.width>=1000 && screen.width<=1370) {
var video = document.getElementById('video');
   video.src = "finalmedium.mp4";
   video.play();
}else if(screen.width>1370){
var video = document.getElementById('video');
   video.src = "final1.mp4";
   video.play();
}
*/



/*

if(screen.width>550){
	document.getElementById("p1").setAttribute("height",490);
	document.getElementById("p2").setAttribute("height",490);
	document.getElementById("p3").setAttribute("height",490);
	document.getElementById("p4").setAttribute("height",490);
	document.getElementById("p5").setAttribute("height",490);
	document.getElementById("p6").setAttribute("height",600);

	
}


*/

/////////// video edit      <source id="videosource" src="final1.mp4" type="video/mp4"/>


//console.log("video is : "+video);

//source.setAttribute('src', 'final1.mp4');

//video.appendChild(source);
//video.play();
/*
   
if(width<1000){
	 var video = document.getElementById('video');
   video.src = "finalsmall.mp4";
   video.play();
}else if (width>=1000 && width<=1370) {
var video = document.getElementById('video');
   video.src = "finalmedium.mp4";
   video.play();
}else if(width>1370){
var video = document.getElementById('video');
   video.src = "final1.mp4";
   video.play();
}
document.getElementById("video").height = "500";
 var video = document.getElementById('video');
 console.log("video height " +video.videoHeight); // returns the intrinsic height of the video
console.log("video width " +video.videoWidth);
 video.videoHeight = 500;
  video.videoWidth = 500;

*/








/////////////////// video end







 
