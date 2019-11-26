///header

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
	document.querySelector(".navbar").classList.toggle("show");

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





/////////// video edit      <source id="videosource" src="final1.mp4" type="video/mp4"/>


//console.log("video is : "+video);

//source.setAttribute('src', 'final1.mp4');

//video.appendChild(source);
//video.play();
   
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












/////////////////// video end



}
window.addEventListener("resize", onresize);



//console.log("innder "+window.innerWidth);

//if(window.innerWidth<731){
//document.getElementById("p1").setAttribute("height",20);
//}



console.log(screen.width);
if(screen.width<550){
	document.getElementById("p1").setAttribute("height",250);
	document.getElementById("p2").setAttribute("height",250);
	document.getElementById("p3").setAttribute("height",250);
	document.getElementById("p4").setAttribute("height",250);
	document.getElementById("p5").setAttribute("height",250);
	document.getElementById("p6").setAttribute("height",300);
}

if(screen.width<1000){
	 var video = document.getElementById('video');
   video.src = "finalsmall.mp4";
   video.play();
}else if (screen.width>=1000 && width<=1370) {
var video = document.getElementById('video');
   video.src = "finalmedium.mp4";
   video.play();
}else if(screen.width>1370){
var video = document.getElementById('video');
   video.src = "final1.mp4";
   video.play();
}




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







}

 
