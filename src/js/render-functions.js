function fetchPokemon(q) {
  return fetch(`https://pixabay.com/api/${q}`).then((res) => {
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

  fetchPokemon(queryValue) // робимо запит на сервер та отримуємо відповідь
    .then(renderPokemonCard) // запускаємо функцію, яка відмалює наші карточки
    .catch(onFetchError) // якщо робиться запит на неіснуючого покемона (404) - викликається ця фукнція для обробки помилки
    .finally(() => form.reset()); // після закінчення промісу ми очищуємо дані форми
}

