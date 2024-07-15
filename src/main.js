import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchGallery } from "./js/pixabay-api";
import { renderCard} from "./js/render-functions";


const form = document.querySelector(".search-form");
const containerCard = document.querySelector(".card-container");
const loader = document.querySelector(".loader");

form.addEventListener("submit", handlerSearch);

function handlerSearch(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase(); 
  if (!queryValue) {
    return;
  }

  containerCard.innerHTML = '';
  
  fetchGallery(queryValue, loader) 
    .then(data => {
       if (data.hits.length === 0) {
        throw new Error();
    }
     renderCard(data.hits, containerCard)
    }) 
    .catch(onFetchError) 
    .finally(() => {
      loader.style.display = "none";
      form.reset();
    }); 
}


function onFetchError(error) {
  iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    messageColor: '#fff',
    messageSize: '16px',
    messageLineHeight: '1.5',
    messageFontWeight: '400',
    backgroundColor: '#ef4040',
    close: true,
    position: 'topRight',            
    progressBarColor: '#b51b1b',
   
});
}



