// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
const main = document.querySelector(".main-content");
const url = `https://pokeapi.co/api/v2/pokemon/`;
const input = document.querySelector(".buscar");
// const api = "https://pokeapi.co/api/v2/type/";

function pokemon() {
  fetch(url)
    .then((r) => r.json())
    .then((pok) => {
      const pokemons = []
      pok.results.forEach((pokemon, index) => {
        pokemons[index] = {name: pokemon.name, id: index + 1}
      })
      render(pokemons)

      function buscar() {
        const pokFilter = pokemons.filter((pokemon) =>
          pokemon.name.includes(input.value.toLowerCase())
        );
        render(pokFilter);
      }
      input.addEventListener('input', buscar)
    });
}
pokemon();



function render(pokemons) {
  main.innerHTML = "";
  if (pokemons.length > 0) {
    pokemons.forEach((pokemon, index) => {
      const div = document.createElement("div");
      div.classList.add("content");
      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
      img.classList.add("pok");
      const h2 = document.createElement("h2");
      h2.classList.add("titulo");
      h2.innerText = pokemon.name;
      const p = document.createElement("p");
      p.innerText = "";
      main.appendChild(div);
      div.append(img, h2, p);
    });
  } else {
    alert('Não existe esse pokemon ' + input.value.toLowerCase())
  }
}
