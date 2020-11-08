const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
const data = await response.json();
console.log(data);
