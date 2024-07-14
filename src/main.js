import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const key = "44916232-ab67e58f2cd7c4a8ed03790be";
const url = "https://pixabay.com/api/";

const containerCard = document.querySelector(".card-container");
const form = document.querySelector(".search-form");

form.addEventListener("submit", handlerSearch);


function fetchGallery(q) {
  return fetch(`${url}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    });
}



function handlerSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const queryValue = form.elements.query.value.toLowerCase(); 

  fetchGallery(queryValue) 
    .then(data=>renderCard(data.hits)) 
    .catch(onFetchError) 
    .finally(() => form.reset()); 
}



function renderCard(img) {
  containerCard.innerHTML = img.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
      `<div class="card">
        <div class="card-img">
         <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${likes}</li>
          <li class="card-item"><span>Views</span>${views}</li>
          <li class="card-item"><span>Comments</span>${comments}</li>
          <li class="card-item"><span>Downloads</span>${downloads}</li>
         </ul>
       </div>
      </div>`).join("");
}

function onFetchError(error) {
  iziToast.error({
    title: 'Error',
    message: 'Illegal operation',
});
}
