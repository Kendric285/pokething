let button = document.getElementById("submitButton")
let pokeIMG = document.getElementById("pokemon")
let inputNum = document.getElementById("number")
let pokeSays = document.getElementById("pokeSays")

let cardID = "tlitb56pduab"

let joke = document.getElementById("orNot")
let pokeShow = false
let quote = document.getElementById("quote")

button.onclick = function(){
  getPokeData(inputNum.value);
  getQuote();
  pokeShow = true
  inputNum.value = ""
}

//comment test

pokeIMG.addEventListener("dblclick", evolve)

function evolve(){
  fetch('https://deckofcardsapi.com/api/deck/'+ cardID + '/draw/?count=1')
    .then(function (response) {
        console.log(response)
        return response.json();
    }).then(function (data) {
        pokeIMG.src = data.cards[0].image
        pokeIMG.width = "150"
        pokeIMG.height = "200"
        pokeSays.innerHTML = "Your Pokemon Has Evolved Into A " + data.cards[0].value + " of " + data.cards[0].suit
        quote.innerHTML = ""
        joke.innerHTML = "Again maybe not because I am not educated in pokemon evolutions"
        return data

  })
}


function getPokeData(num){
  fetch('https://pokeapi.co/api/v2/pokemon/' + num)
    .then(function (response) {
        console.log(response)
        return response.json();
    }).then(function (data) {
        pokeIMG.src = data.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]
        pokeIMG.width = "150"
        pokeIMG.height = "200"
        pokeSays.innerHTML = capitalizeFirstLetter(data.name) + " says:"
        return data

  })
}

function getQuote(){
  fetch('https://api.quotable.io/random')
    .then(function (response) {
        console.log(response)
        return response.json();
    }).then(function (data) {
        console.log(data)
        quote.innerHTML = data.content
        joke.innerHTML = "Or not because I really don't know how to translate what pokemon say"
    })
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

