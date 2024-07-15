import{S as f,i as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="44916232-ab67e58f2cd7c4a8ed03790be",h="https://pixabay.com/api/";function y(s,t){return t.style.display="block",fetch(`${h}?key=${p}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function g(s,t){t.innerHTML=s.map(({webformatURL:i,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:d})=>`<div class="card">
        <div class="card-img">
         <a href="${e}"><img src="${i}" alt="${r}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${n}</li>
          <li class="card-item"><span>Views</span>${l}</li>
          <li class="card-item"><span>Comments</span>${u}</li>
          <li class="card-item"><span>Downloads</span>${d}</li>
         </ul>
       </div>
      </div>`).join(""),new f(".card-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const b=document.querySelector(".search-form"),a=document.querySelector(".card-container"),c=document.querySelector(".loader");b.addEventListener("submit",L);function L(s){s.preventDefault();const t=s.currentTarget,o=t.elements.query.value.trim().toLowerCase();o&&(a.innerHTML="",y(o,c).then(i=>{if(i.hits.length===0)throw new Error;g(i.hits,a)}).catch(v).finally(()=>{c.style.display="none",t.reset()}))}function v(s){m.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",messageFontWeight:"400",backgroundColor:"#ef4040",close:!0,position:"topRight",progressBarColor:"#b51b1b"})}
//# sourceMappingURL=commonHelpers.js.map
