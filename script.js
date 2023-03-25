const clapButton = document.getElementById('clap-button');
const clapCount = document.getElementById('clap-count');
let count = 0;

clapButton.addEventListener('click', () => {
  count++;
  clapCount.textContent = count;
});

const commentForm = document.querySelector('#comment-container form');
const commentList = document.querySelector('#comment-list');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = event.target.elements.name;
  const commentInput = event.target.elements.comment;

  const name = nameInput.value;
  const comment = commentInput.value;

  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-item');

  const commentName = document.createElement('p');
  commentName.textContent = name;
  commentName.classList.add('comment-name');
  commentItem.appendChild(commentName);

  const commentText = document.createElement('p');
  commentText.textContent = comment;
  commentText.classList.add('comment-text');
  commentItem.appendChild(commentText);

  commentList.appendChild(commentItem);

  nameInput.value = '';
  commentInput.value = '';
});

const STORAGE_KEY = 'webclap-clap-count';

let count = Number(localStorage.getItem(STORAGE_KEY)) || 0;
clapCount.textContent = count;

clapButton.addEventListener('click', () => {
  count++;
  clapCount.textContent = count;
  localStorage.setItem(STORAGE_KEY, count);
});
