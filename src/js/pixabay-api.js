
function renderCard({ webformatUrl, largeImageURL , tags , likes , views , comments, downloads  }) {
  const markup = `<div class="card">
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
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert("Упс, щось пішло не так!");
}