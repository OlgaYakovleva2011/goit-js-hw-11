/* empty css                      */import{a as l,S as m,i as n}from"./assets/vendor-BX8YMJUK.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="54898144-8849b2938f972b2520ec71ccb";l.defaults.baseURL="https://pixabay.com/api/";async function p(t){return(await l.get("",{params:{key:d,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}})).data}const g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(t){const o=document.querySelector(".gallery"),i=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:s,views:c,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${a}" alt="${r}" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b>${s}</p>
            <p class="info-item"><b>Views</b>${c}</p>
            <p class="info-item"><b>Comments</b>${u}</p>
            <p class="info-item"><b>Downloads</b>${f}</p>
          </div>
        </li>
      `).join("");o.innerHTML=i,g.refresh()}function h(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function L(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",t=>{t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({title:"Caution",message:"Please fill out the search field!",position:"topRight"});return}h(),b(),p(o).then(i=>{if(i.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(i.hits)}).catch(i=>{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
