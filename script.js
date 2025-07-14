fetch('https://rickandmortyapi.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query: `
      {
        characters(page: 3) {
          info {
            count
          }
          results {
            location {
            name
            type
            dimension
          }
            name

            episode {
          name
          }
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
  const images = document.querySelectorAll('.img');
  const locat = document.querySelectorAll('.location')
  const nameElements = document.querySelectorAll('.names');
  const characters = data.data.characters.results;
  const status = document.querySelectorAll('.live');
  const last = document.querySelectorAll('.last')

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

  locat.forEach((ws, index) => {
    if (locat[index]) {
      ws.innerHTML = characters[index].location.name;
    }
  })

  last.forEach((we, index) => {
    if (last[index]) {
      we.innerHTML = characters[index].episode.slice(-1)[0].name;
    }
  })
});
