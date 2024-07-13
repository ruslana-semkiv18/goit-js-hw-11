
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type photo.
// orientation horizontal.
// safesearch  true.

function fetchGallery(q) {
  return fetch(`https://pixabay.com/api/?key=44916232-ab67e58f2cd7c4a8ed03790be&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`).then((res) => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

const containerCard = document.querySelector(".card-container");

const form = document.querySelector(".search-form");
form.addEventListener("submit", handlerSearch);
function handlerSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget; // посилання на елемент форми
  const queryValue = form.elements.query.value.toLowerCase(); // значення, яке написав користувач

  fetchGallery(queryValue) // робимо запит на сервер та отримуємо відповідь
    .then(renderCard) // запускаємо функцію, яка відмалює наші карточки
    .catch(onFetchError) // якщо робиться запит на неіснуючого покемона (404) - викликається ця фукнція для обробки помилки
    .finally(() => form.reset()); // після закінчення промісу ми очищуємо дані форми
}



function renderCard(img) {
    containerCard.innerHTML = img.map(({ webformatUrl, largeImageURL, tags, likes, views, comments, downloads })=>
        `<div class="card">
   <div class="card-img">
     <a href="${largeImageURL}"><img src="${webformatUrl}" alt="${tags}"></a>
   </div>
   <div class="card-body">
     <ul class="list-group">
       <li><span>Likes</span>${likes}</li>
       <li><span>Views</span>${views}</li>
       <li><span>Comments</span>${comments}</li>
       <li><span>Downloads</span>${downloads}</li>
     </ul>
   </div>
</div>`).join("");
}

function onFetchError(error) {

      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
}