fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d077a0720780fe81528dc6791ce6a21a&hash=27098ce849ee384cc337d4bf48a94941')
  .then(res => res.json())
  .then(data => {
    console.log(data.data.results);
    const characters = data.data.results;

    // Contenedor de items de personajes
    const containerItems = document.querySelector('.content__intro-items');

    // Recorremos el array de personajes
    characters.forEach(character => {
      console.log(character.name);

      // Generamos la estructura HTML de cada entrada de personaje
      let structure = `<li class="content__intro-item">
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class="content__intro-item-img">
      <h2 class="content__intro-item-title">${character.name}</h2>
      </li>`;

      // Agregamos la estructura HTML al contenedor de items
      containerItems.innerHTML += structure;
    });
  });
