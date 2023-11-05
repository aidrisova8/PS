let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

const title=document.getElementById("main-title")
title.innerText="Fly High To Success"
console.log(title)
  // Part 2
document.querySelector('body').style.backgroundColor="#faebd7"

  // Part 3
const favoriteThingsList=document.getElementById('favorite-things');
console.log(favoriteThingsList)
favoriteThingsList.removeChild(favoriteThingsList.lastElementChild)

  // Part 4
const specialTitles=document.querySelectorAll('.special-title')
console.log(specialTitles)
specialTitles.forEach((el)=>{
  el.style.fontSize="2rem"
})
  // Part 5
  const ulPastRace=document.getElementById("past-races")
const pastRaces=document.querySelectorAll('#past-races li')
console.log(pastRaces)
let chicago;
 for(let city of pastRaces){
   if(city.innerText== 'Chicago'){
    const chicago=city;
    chicago.remove();
   }
 }
  

  // Part 6

  const li=document.createElement("li")
  li.textContent='Dayton'
  ulPastRace.append(li)
 
  // Part 7
  const main=document.querySelector(".main")
console.log(main)
const div=document.createElement("div")
div.classList.add("blog-post")
const h2=document.createElement('h2')
h2.innerText='Dayton'
const p=document.createElement('p')
p.textContent='Birthplace of Aviation'
main.append(div);
div.append(h2)
div.append(p)
console.log(ulPastRace)
  // Part 8
  
 
  const quoteTitle = document.querySelector('#quote-title');
    quoteTitle.addEventListener('click', randomQuote);
 
  // Part 9

const blogPostElements=document.getElementsByClassName('blog-post')
console.log(blogPostElements)

for(let el of blogPostElements){
  el.addEventListener('mouseout',function(evt){
    evt.target.classList.toggle('purple');
  })

  el.addEventListener('mouseenter',function(evt){
    evt.target.classList.toggle('red')
  })
}
});
