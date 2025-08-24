import{a as p,S as f,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="";async function g(s){try{return(await p.get(y,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw new Error("Error")}}const c=document.querySelector(".gallery"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:m,downloads:d})=>`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${o}" alt="${e}" loading="lazy">
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${n}</p>
        <p><b>Comments:</b> ${m}</p>
        <p><b>Downloads:</b> ${d}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function F(){c.innerHTML=""}const l=document.getElementById("loader");function E(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form"),w=u.querySelector('input[name="search-text"]');u.addEventListener("submit",s=>{s.preventDefault();const r=w.value.trim();r&&(F(),E(),g(r).then(o=>{if(!o||o.totalHits===0||!o.hits||o.hits.length<=0)a.error({message:`Sorry, there are no images matching your search ${r}. Please try again!`,position:"bottomCenter",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",class:"error-toast",close:!0});else{const i=o.hits.slice(0,9);L(i)}}).catch(o=>{a.error({message:o.message,position:"bottomCenter",timeout:5e3,backgroundColor:"#EF4040",messageColor:"#FAFAFB",class:"error-toast"})}).finally(()=>{v()}))});
//# sourceMappingURL=index.js.map
