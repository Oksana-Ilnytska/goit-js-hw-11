import{a as m,S as p,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="51926469-17331259ac3d6722fcf98d7c3";async function g(s){try{return(await m.get(y,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Помилка при отриманні зображень")}}const c=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" loading="lazy">
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${d}</p>
        <p><b>Downloads:</b> ${f}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}const l=document.getElementById("loader");function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const u=document.querySelector(".form"),$=u.querySelector('input[name="search-text"]');u.addEventListener("submit",s=>{s.preventDefault();const r=$.value.trim();r&&(v(),w(),g(r).then(o=>{!o.hits||o.hits.length===0?a.error({message:`Sorry, there are no images matching your search ${r}. Please try again!`}):L(o.hits)}).catch(o=>{a.error({message:o.message})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
