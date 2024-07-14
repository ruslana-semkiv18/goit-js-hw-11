import{i as a}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const l="44916232-ab67e58f2cd7c4a8ed03790be",d="https://pixabay.com/api/",u=document.querySelector(".card-container"),f=document.querySelector(".search-form");f.addEventListener("submit",p);function m(o){return fetch(`${d}?key=${l}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value.toLowerCase();m(n).then(s=>h(s.hits)).catch(y).finally(()=>t.reset())}function h(o){u.innerHTML=o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:c})=>`<div class="card">
        <div class="card-img">
         <a href="${n}"><img src="${t}" alt="${s}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${e}</li>
          <li class="card-item"><span>Views</span>${r}</li>
          <li class="card-item"><span>Comments</span>${i}</li>
          <li class="card-item"><span>Downloads</span>${c}</li>
         </ul>
       </div>
      </div>`).join("")}function y(o){a.error({title:"Error",message:"Illegal operation"})}
//# sourceMappingURL=commonHelpers.js.map
