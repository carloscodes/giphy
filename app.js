// Promises
// A Promise is an object!
// A Promise has one of 3 states: Pending, Fulfilled, or Rejected
// .then() receives a function to be executed when it has been fulfilled
// .catch() also receives one when the promise has been rejected

let a = document.getElementById('app');

/* let data = { name: 'Carlos Chavarria', hobby: 'Coding!' };

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((err) => {
    document.write(err);
    console.log(err);
  });

fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((data) => {
    for (user of data) {
      a.innerHTML += `<li> Visit <a target="_blank" href="${user.html_url}">'${user.login}'</a> github!</li>`;
    }
  })
  .catch((err) => document.write(err));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    for (user of data) {
      a.innerHTML += `<li>${user.name}</li>`;
    }
  })
  .catch((err) => console.log(err));

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 10; i++) {
      a.innerHTML += `<li><img src="${data[i].thumbnailUrl}"></li>`;
    }
  })
  .catch((err) => console.log(err));
 */

function create() {
  delay(2000)
    .then((response) => document.write(response))
    .catch((err) => console.error(err));
}

// own promise
function delay(time) {
  return new Promise((resolve, reject) => {
    if (isNaN(time))
      return reject(new Error('You done messed up. Give me a number'));
    setTimeout(() => resolve('Carlos Rocks!'), time);
  });
}

//create();

//let searchItem = prompt('Enter a word and I will find you a gif!: ');

async function findGiphy() {
  if (a.innerHTML !== '') {
    a.innerHTML = '';
  }

  let t = document.getElementById('userInput');
  let searchItem = t.value;

  let response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=NzpZnmcF7OCjj56NzOMUTbkW0tXsPU5T&q=${searchItem}&limit=25&offset=0&rating=G&lang=ensearch?`
  );

  let json = await response.json();

  for (let i = 0; i < 20; i++) {
    let vid = json.data[i].images['fixed_height_small'].url;

    a.innerHTML += `<img height="400px" width="600px" src="${vid}" />`;
  }
}
