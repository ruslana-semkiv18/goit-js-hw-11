const key = "44916232-ab67e58f2cd7c4a8ed03790be";
const url = "https://pixabay.com/api/";


export function fetchGallery(q, loader) {
  loader.style.display = "block"; 
  return fetch(`${url}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }      
        return res.json();
    });
}

