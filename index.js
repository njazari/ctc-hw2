$(document).ready(function(){ 
console.log("JS loaded");
 //INSERT CODE HERE

 //QUESTION 1
 function Dog() {};

 Dog.prototype.bark = function() {
 	return('woof');
 };

function ShibaInu() {
	Dog.call(this);
};

ShibaInu.prototype = new Dog();

ShibaInu.prototype.constructor = ShibaInu;

ShibaInu.prototype.bark = function() {
	return('much wow very javascript');
};

 //QUESTION 3
$( ".secondheading" ).html("Monkeys are the best animal!");
$( ".button.secondbutton").click(function() {
	$( this ).css("background", "turquoise")
});


 //QUESTION 4
 $(".button#task4").click(function() {
 	$("#hipcat").css("-webkit-filter", "blur(1px) sepia(0.6)")
 });

 //QUESTION 5
 $(".button#task5").click(function() {
 	$(".wheel").css("-webkit-animation-name", "spin")
  	$(".wheel").css("-webkit-animation-play-state", "running")
 	$(".spincar").css("-webkit-animation-play-state", "running")
 });

 //QUESTION 6
 //Click on the cat to start the animation
 $(".nyancat").click(function(){
 $(".nyancat").animate({"left": "950px"}, 1600);
 $(".rainbows").animate({
    width: "70%",
  }, 1600 ); 
 })

});