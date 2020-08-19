document.lastElementChild.lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerText="Something"

document.querySelector("ul li a").style.color="red";
document.querySelector("button").style.backgroundColor="yellow";

document.querySelector("h1").classList.add("huge");

/*This modifies the html*/
document.querySelector("h1").innerHTML="<em>Heading</em>";
/*This modifies only the text*/
document.querySelector("h2").textContent="<em>Heading</em>";

/*changes the href attribute to point at bing.com*/
document.querySelector("a").setAttribute("href","https://www.bing.com");
/*
getElements*
getElementsByTagName: Select by name.
getElementsByClassName: Select by Class
getElementById: Select by Id

querySelector & querySelectorAll: These are used for more complex queries.
querySelector: returns a single object. Incase the selector match multiple objects, you get back the first object.

document.querySelector("h1")
document.querySelector("#title")
document.querySelector(".btn")
document.querySelector("li a")
document.querySelector("li.item")
document.querySelector("#list a")
querySelectorAll: to get all objects use querySelectorAll
document.querySelectorAll("#list a")
*/
