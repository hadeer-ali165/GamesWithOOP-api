/* const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '62ad219f90mshedb525cebd87675p120063jsn257822b777b2',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
} */

import { Games } from "./game.js";
new Games();

let nav = document.querySelector(".nav");
window.onscroll = function(){
    if(window.pageYOffset > 190)
        {
            nav.classList.add("fixed");
            console.log("ok");
        }
        else if(window.pageYOffset < 200)
        {
            nav.classList.remove("fixed");
            nav.classList.add(".nav");
            console.log('no');
            
        }
}
let closeIcon = document.querySelector(".iconMenu");
let listsUL = document.querySelector(".ulLinks ul");
closeIcon.addEventListener("click",function(){
    listsUL.classList.toggle("listLinks");
    nav.classList.toggle("navbar");
})