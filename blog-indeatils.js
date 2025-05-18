const likeBtn = document.querySelector('.like-btn');
const likeCount = document.getElementById('like-count');

let count = 0;

likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});



const shareBtn = document.querySelector('.share-btn');
const shareCount = document.getElementById('share-count');

let shareCounter = 0;

shareBtn.addEventListener('click', () => {
  shareCounter++;
  shareCount.textContent = shareCounter;
});



