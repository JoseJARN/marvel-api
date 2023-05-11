const charactersMarvelAPI = {
  render: () => {
    fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d077a0720780fe81528dc6791ce6a21a&hash=27098ce849ee384cc337d4bf48a94941')
      .then(res => res.json())
      .then(data => {
        // console.log(data.data.results);
        const characters = data.data.results;

        // Obtenemos 12 registros aleatorios
        const randomCharacters = characters.sort(() => Math.random() - Math.random()).slice(0, 12);

        // Contenedor de items de personajes
        const containerItems = document.querySelector('.content__intro-items');

        // Recorremos el array de personajes
        randomCharacters.forEach(character => {
          // console.log(character.name);

          // Generamos la estructura HTML de cada entrada de personaje
          let structure = `<li class="content__intro-item">
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="content__intro-item-img">
      <h2 class="content__intro-item-title">${character.name}</h2>
      </li>`;

          // Agregamos la estructura HTML al contenedor de items
          containerItems.innerHTML += structure;
        });
      });
  }
}

// Ejecutamos el método render
charactersMarvelAPI.render();

// Obtenemos el botón de resfrescar
const refreshButton = document.querySelector('#characters-button');

// Si alguien hace click en el botón de refrescar volvemos a ejectuar el método render
refreshButton.addEventListener('click', () => {
  // Limpiamos el contenedor de items
  const containerItems = document.querySelector('.content__intro-items');
  containerItems.innerHTML = '';

  // Ejecutamos el método render
  charactersMarvelAPI.render();
  console.log('Se ha hecho click en el botón de refrescar');
});
