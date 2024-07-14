import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="44916232-ab67e58f2cd7c4a8ed03790be",p="https://pixabay.com/api/",a=document.querySelector(".card-container"),h=document.querySelector(".search-form");h.addEventListener("submit",g);function y(o){return v(),fetch(`${p}?key=${m}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).finally(()=>{w()})}function g(o){o.preventDefault();const t=o.currentTarget,i=t.elements.query.value.trim().toLowerCase();i&&(a.innerHTML="",y(i).then(s=>{if(s.hits.length===0)throw new Error;b(s.hits)}).catch(L).finally(()=>t.reset()))}function b(o){a.innerHTML=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:l,downloads:d})=>`<div class="card">
        <div class="card-img">
         <a href="${s}"><img src="${i}" alt="${e}"></a>
        </div>
        <div class="card-body">
         <ul class="card-list">
          <li class="card-item"><span>Likes</span>${r}</li>
          <li class="card-item"><span>Views</span>${n}</li>
          <li class="card-item"><span>Comments</span>${l}</li>
          <li class="card-item"><span>Downloads</span>${d}</li>
         </ul>
       </div>
      </div>`).join(""),new u(".card-img a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function L(o){f.error({message:"Sorry, there are no images matching your search query.Please try again!",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",messageFontWeight:"400",backgroundColor:"#ef4040",close:!0,position:"topRight",progressBarColor:"#b51b1b"})}const c=document.querySelector(".loader");function v(){c.style.display="block"}function w(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
