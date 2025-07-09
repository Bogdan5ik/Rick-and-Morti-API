fetch('https://rickandmortyapi.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
        characters(page: 4) {
          info {
            count
          }
          results {
            name
            image
            status
          }
        }
      }
    `
  })
})
.then(res => res.json())
.then(data => {
  const images = document.querySelectorAll('img');
  const nameElements = document.querySelectorAll('.names');
  const characters = data.data.characters.results;
  const status = document.querySelectorAll('.live');

  images.forEach((img, index) => {
    if (characters[index]) {
      img.src = characters[index].image;
      img.alt = characters[index].name;
    }
  });

  nameElements.forEach((el, index) => {
    if (characters[index]) {
      el.innerHTML = characters[index].name;
    }
  });

  status.forEach((le, index) => {
    if (status[index]) {
      le.innerHTML = characters[index].status;
    }
  })
});
