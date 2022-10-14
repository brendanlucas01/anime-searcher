//alert("Connected");
var butn=document.getElementById("butn1");
var userquery=document.getElementById("query");
var elem=document.querySelector(".element");
var row = document.getElementById("row");
var message= document.getElementById("message");
let data;
function getAnime(query){
 	reqlink=" https://api.jikan.moe/v3/search/anime?q="+query;
	function findanime(){
		data=JSON.parse(this.responseText);
		console.log(data.results);
		row.innerHTML=" ";
		console.log(data.results.length);
		for (var i =0; i < data.results.length; i++) {
			createcard(data.results[i]);
		}
		//createcard(data.results[0]);
		
	} 
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", findanime);
	oReq.open("GET",reqlink);
	oReq.send();
}

butn.addEventListener("click",function(){
	searcher();	
});

userquery.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      searcher();
    }
});

function searcher(){
	q=userquery.value;
	if (q==="") {
		message.innerText="Enter some title to be searched";
	} 
	else {
		message.innerText=""
		getAnime(q);
	}
}
// class NewCards extends HTMLElement{
// 	constructor(){
// 		super();
// 	}
	

// }

// customElements.define('new-cards',NewCards);

// let newcards= new NewCards();
//document.getElementById("row").insertElement('new-cards');
function createcard(data){
	console.log(data);
	// if(data.rated!==null&&data.rated!==undefined){
	// 	if(data.rated.localeCompare("G")===0||data.rated.localeCompare("PG")===0||data.rated.localeCompare("PG-13")===0){
			
	// 	}
	// }

	let firstdiv=document.createElement("div");
			firstdiv.classList.add("card","col-lg-3","col-md-4","col-sm-6","mb-3");
			//firstdiv.setAttribute("style","width: 15rem;");
			let firstlink=document.createElement("a");
			firstlink.href=data.url;
			firstlink.classList.add("cardlink");
			let firstimg=document.createElement("img");
			firstimg.src=data.image_url;
			firstimg.classList.add("card-img-top");
			firstlink.appendChild(firstimg);
			let seconddiv=document.createElement("div");
			seconddiv.classList.add("card-body");
			let cardtitle=document.createElement("h5");
			cardtitle.classList.add("card-title");
			cardtitle.innerText=data.title.slice(0,17)+"...";
			seconddiv.appendChild(cardtitle);
			let rat = document.createElement("p");
			let rating = document.createElement("span");
			let giphy = document.createElement("i");
			giphy.classList.add("far","fa-star");
			rating.appendChild(giphy);
			let text1=document.createTextNode(data.score);
			rating.appendChild(text1);
			//rating.innerText=data.score;
			//rating.setAttribute("style","float:left");
			rat.appendChild(rating);		
			//let rated = document.createElement("span");
			// rated.innerText=data.rated;
			// rated.setAttribute("style","float:center");
			// rat.appendChild(rated);
			startyear=new Date(data.start_date);
			let year = document.createElement("span");
			let giphy2 = document.createElement("i");
			giphy2.classList.add("fad","fa-calendar-alt");
			year.appendChild(giphy2);
			let text2=document.createTextNode(startyear.getFullYear());
			year.appendChild(text2);
			//year.innerText=startyear.getFullYear();
			year.setAttribute("style","float:right");
			rat.appendChild(year);
			seconddiv.appendChild(rat);
			let synopara = document.createElement("div");
			synopara.classList.add("synopsis");
			synopara.innerText=data.synopsis.slice(0,40)+"...";
			synopara.setAttribute("align","left");
			seconddiv.appendChild(synopara);
			firstlink.appendChild(seconddiv);
			firstdiv.appendChild(firstlink);
			row.appendChild(firstdiv);

	
}

/*
	<div class="card" style="width: 15rem;">
  <img src="https://cdn.myanimelist.net/images/anime/6/81549.jpg?s=a9f0422fb9f5c9264645e77c96bb82d8" class="card-img-top" id="image">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
  </div>
	</div>
*/

function loader(){
	let list = ["dragon ball","onepiece","death note","haikyuu","fullmetal alchemist brotherhood","naruto","my hero academica","jojo's bizzare adventure","attack on titan","mod psycho 100","hunterXhunter","onepunchman","kaguya-sama","pokemon"];
	var p = Math.floor(Math.random()*list.length);
	var j = "e.g. "+list[p];
	userquery.placeholder=j; 
	if (userquery.value==="") {
		console.log(list);
		var i = Math.floor(Math.random()*list.length);
		console.log(list[i]);
		console.log(i);
		getAnime(list[i]);
	} 
	else {
		getAnime(userquery.value);
	}
}