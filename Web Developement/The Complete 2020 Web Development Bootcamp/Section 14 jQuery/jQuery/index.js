/*
If we put the script tags at the end of the body tags, then the scripts
are executed after the body is loaded, so writing the below lines are enough
*/

$("h1").css("color","red");

/*Gives the color of the text*/
console.log($("h1").css("color"));

/*Gives the font-size*/
console.log($("h1").css("font-size"));

/*Adds both css class*/
$("h1").addClass("big-title big-margin");

/*Removes big-title class*/
$("h1").removeClass("big-title");

/*Checks if big-margin class is present*/
console.log($("h1").hasClass("big-margin"));


/*Modifying Text*/
$("button").text("Hey.. Bud.!!");

/*Modifying Inner HTML*/
$("h1").html("<em>Hey!!</em>");

/*Check the href attribute*/
console.log($("a").attr("href"));

/*Set the href attribute*/
$("a").attr("href","www.yahoo.com");

/*We can use this with class*/
console.log($("h1").attr("class"));

/*Key Pres Events*/
$(document).keydown(function(event){
  $("h1").text(event.key);
});

/*Click Events*/
$("button").click(function(event){
  $("h1").css("color","yellow");
});

/*Another way to listen to events*/
$("h1").on("mouseover",function(){
  $("h1").css("color","green");
});


$("h1").before("<button>Before</button>");
$("h1").after("<button>After</button>");
$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

/*If we put the write the script tags inside the head section
then we need to make sure the document is ready/ completely loaded before these
jQuery runs, hence the below function*/

/*$("document").ready(function(){
  $("h1").css("color","red");
})*/
