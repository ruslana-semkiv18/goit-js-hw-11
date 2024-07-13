import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function l(o){return fetch(`https://pixabay.com/api/?key=44916232-ab67e58f2cd7c4a8ed03790be&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const u=document.querySelector(".card-container"),d=document.querySelector(".search-form");d.addEventListener("submit",f);function f(o){o.preventDefault();const t=o.currentTarget,n=t.elements.query.value.toLowerCase();l(n).then(p).catch(m).finally(()=>t.reset())}function p(o){u.innerHTML=o.map(({webformatUrl:t,largeImageURL:n,tags:s,likes:e,views:r,comments:i,downloads:a})=>`<div class="card">
   <div class="card-img">
     <a href="${n}"><img src="${t}" alt="${s}"></a>
   </div>
   <div class="card-body">
     <ul class="list-group">
       <li><span>Likes</span>${e}</li>
       <li><span>Views</span>${r}</li>
       <li><span>Comments</span>${i}</li>
       <li><span>Downloads</span>${a}</li>
     </ul>
   </div>
</div>`).join("")}function m(o){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
