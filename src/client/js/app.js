import api from './functions.js';

const cardsEl = document.querySelector('.cards');
const detailEl = document.querySelector('.detail');
const selectEl = document.querySelector('#authors');

if (cardsEl !== null) {
  // const posts = api.getAllPosts();
  api.getAllPosts()
    .then((posts) => {
      return api.addAuthorInfoToPost(posts)
    })
    .then((posts) => {
      console.log(posts);
      posts.forEach((post) => {
        cardsEl.innerHTML += `
          <a href="${post.fullUrl}" class="card">
            <div class="card__image">
            </div>
            <div class="card__content">
              <h2>${post.title}</h2>
              <span>${post.author.name} - ${formatDate(post.publishedOn)}</span>
              <p>${post.intro}</p>
            </div>
          </a>
        `;
      });
    })
}

if (detailEl !== null) {
  const url = location.href;
  const id = url.substring(url.lastIndexOf('/') + 1);

  api.getPost(id)
    .then((post) => {
      detailEl.innerHTML = `
        <h2>${post.title}</h2>
        <span>${post.author.name} - ${formatDate(post.publishedOn)}</span>
        <p>${post.intro}</p>
        <div>${post.description}</div>
      `
    })
}

if (selectEl !== null) {
  api.getAuthors()
    .then((authors) => {
      console.log(authors);
      authors.forEach((author) => {
        selectEl.innerHTML += `<option value="${author.id}">${author.name}</option>`;
      })
    })
} 

const formatDate = (createdDate) => {
  const date = new Date(createdDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${addZeros(day)}/${addZeros(month + 1)}/${addZeros(year)} ${addZeros(hours)}:${addZeros(minutes)}`;
}

const addZeros = (value) => value < 10 ? `0${value}` : value;