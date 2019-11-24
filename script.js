///header



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
}

 


//navbar links
               /*
var navbar = document.querySelector("header");
console.log(navbar);
a = navbar.querySelectorAll("a");

a.forEach(function(element){
element.addEventListener("click",function(){
	for (var i = 0; i < a.length; i++) {
		a[i].classList.remove("active");
	}
	this.classList.add("active");
  })
})
*/