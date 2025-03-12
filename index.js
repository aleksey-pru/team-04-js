import{a as R,i as K,A as O,S as h,N as L,K as S,M as V}from"./assets/vendor-CIHPDZ9i.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const W=document.querySelector(".icon-x"),m=document.querySelector(".modal-overlay"),l=document.querySelector('[name="email"]'),c=document.querySelector('[name="comment"]');document.querySelector(".send-btn");const H=document.querySelector(".letswork-form"),T=document.querySelector(".modal");W.addEventListener("click",()=>{m.classList.remove("is-open")});document.addEventListener("keydown",e=>{e.key==="Escape"&&m.classList.remove("is-open")});m.addEventListener("click",e=>{e.target!==T&&!T.contains(e.target)&&m.classList.remove("is-open")});function N(){document.querySelectorAll(".error-message, .success-message").forEach(o=>o.remove()),l.classList.remove("error"),l.classList.remove("success");const e=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;return l.value.match(e)?(l.classList.add("success"),l.insertAdjacentHTML("afterend","<p class='success-message' style='color:green;'>Success!</p>"),!0):(l.classList.add("error"),l.insertAdjacentHTML("afterend","<p class='error-message' style='color:red;'>Invalid email, try again</p>"),!1)}function G(){return c.classList.remove("success"),c.classList.remove("error"),document.querySelectorAll(".error-message").forEach(e=>e.remove()),c.value.trim()===""?(c.classList.add("error"),!1):(c.classList.add("success"),!0)}l.addEventListener("blur",N);c.addEventListener("blur",G);async function _(e){e.preventDefault();const o=N(),n=G();if(!(!o||!n))try{(await R.post("https://portfolio-js.b.goit.study/api/requests",{email:l.value.trim(),comment:c.value.trim()})).status===201&&(m.classList.add("is-open"),document.querySelectorAll(".error-message, .success-message").forEach(t=>t.remove()),l.classList.remove("error"),l.classList.remove("success"),c.classList.remove("success"),c.classList.remove("error"),H.reset())}catch{K.error({title:"Error",message:"Something went wrong. Please try again."})}}H.addEventListener("submit",_);function F(){const e=new O(".about-me-list",{duration:400,showMultiple:!0,openOnInit:[0],beforeOpen:function(o){const n=o.querySelector(".about-me-svg");n.style.transform="rotate(180deg) translate(50%, 50%)"},beforeClose:function(o){const n=o.querySelector(".about-me-svg");n.style.transform="rotate(0deg) translate(-50%, -50%)"}});return document.addEventListener("DOMContentLoaded",function(){setTimeout(()=>{const o=document.querySelector(".about-me-item");if(o){const n=o.querySelector(".about-me-svg");n&&(n.style.transform="rotate(180deg) translate(50%, 50%)")}},50)}),e}F();function U(){const e=new h(".about-me-slide ",{modules:[L,S,V],loop:!0,slidesPerView:1,freeMode:!1,centeredSlides:!1,simulateTouch:!0,slideToClickedSlide:!0,slidesPerGroup:1,navigation:{nextEl:".about-me-slide-button"},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".about-me-slide-list"},breakpoints:{320:{slidesPerView:2,slidesPerGroup:1},768:{slidesPerView:3,slidesPerGroup:1},1440:{slidesPerView:6,slidesPerGroup:1}},on:{init:function(){this.slides.forEach(s=>s.classList.remove("active-slide")),this.slides[0].classList.add("active-slide")},slideChange:function(){this.slides.forEach(s=>s.classList.remove("active-slide")),this.slides[this.activeIndex].classList.add("active-slide")}}}),o=document.querySelector(".box-slide");let n=!1;new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&!n?(document.addEventListener("keydown",t),n=!0):!i.isIntersecting&&n&&(document.removeEventListener("keydown",t),n=!1)})},{root:null,threshold:.5}).observe(o);function t(s){s.key==="Tab"&&(s.preventDefault(),e.slideNext())}return e}U();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),o=document.querySelectorAll(".marquee__line");e&&new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting?o.forEach(s=>{s.style.animationPlayState="running"}):o.forEach(s=>{s.style.animationPlayState="paused"})})},{threshold:.2}).observe(e)});document.addEventListener("DOMContentLoaded",function(){new O(".faq-list",{duration:400,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",activeClass:"active",beforeOpen:e=>{e.querySelector(".icon-down").style.display="none",e.querySelector(".icon-up").style.display="block"},beforeClose:e=>{e.querySelector(".icon-down").style.display="block",e.querySelector(".icon-up").style.display="none"}})});const j=document.querySelector(".burger-btn"),E=document.querySelector(".mobile-menu"),Z=document.querySelector(".mobile-menu-close"),J=document.querySelectorAll(".mob-menu-nav-link");function Q(){E.classList.add("is-open"),X()}function q(){E.classList.remove("is-open"),Y()}function X(){document.body.style.overflow="hidden"}function Y(){document.body.style.overflow="visible"}j.addEventListener("click",Q);Z.addEventListener("click",q);J.forEach(e=>{e.addEventListener("click",()=>{q()})});document.addEventListener("click",e=>{!E.contains(e.target)&&!j.contains(e.target)&&q()});const D=document.querySelector(".js-header-menu-btn"),x=document.querySelector(".header-submenu");document.querySelectorAll(".header-submenu-item a");function z(){x.classList.remove("is-open")}D.addEventListener("click",e=>{e.stopPropagation(),x.classList.toggle("is-open")});document.addEventListener("click",e=>{!D.contains(e.target)&&!x.contains(e.target)&&z()});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".menu-navigation, .mob-menu-nav-link").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const r=this.getAttribute("href").substring(1),t=document.getElementById(r);t?(z(),window.scrollTo({top:t.offsetTop-document.getElementById("header").offsetHeight,behavior:"smooth"})):console.log("Секція відсутня:",r)})})});window.addEventListener("load",()=>{const e=new h(".projects-swiper",{modules:[L,S,V],loop:!1,slidesPerView:1,slidesPerGroup:1,spaceBetween:10,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,releaseOnEdges:!0},touchEventsTarget:"container",navigation:{nextEl:".swiper-btn-right",prevEl:".swiper-btn-left",disabledClass:"swiper-btn-disabled"},watchOverflow:!0,preloadImages:!0});e.on("slideChange",function(){const o=document.querySelector(".swiper-btn-left"),n=document.querySelector(".swiper-btn-right");e.isBeginning?o.classList.add("swiper-btn-disabled"):o.classList.remove("swiper-btn-disabled"),e.isEnd?n.classList.add("swiper-btn-disabled"):n.classList.remove("swiper-btn-disabled");const r=e.activeIndex;(r===1||r===2)&&e.update()})});const ee="https://portfolio-js.b.goit.study/api/reviews",p=document.querySelector(".reviews-list"),g=document.querySelector(".swiper-button-prev"),b=document.querySelector(".swiper-button-next");async function te(){try{const e=await fetch(ee);if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);const o=await e.json();if(!Array.isArray(o)||o.length===0){p.innerHTML='<p class="not-found">Not found</p>',C();return}se(o),oe()}catch(e){console.error("Error fetching reviews:",e),p.innerHTML='<li class="not-found"><p>Not found</p></li>',C()}}function se(e){p.innerHTML="",e.forEach(({avatar_url:o,author:n,review:r})=>{const t=document.createElement("li");t.classList.add("swiper-slide","review-card"),t.innerHTML=`
      <img src="${o}" alt="${n}" class="review-avatar">
      <h3 class="review-name">${n}</h3>
      <p class="review-text">${r}</p>
    `,p.appendChild(t)}),f(),window.addEventListener("resize",f)}function f(){const e=document.querySelector(".container-reviews"),o=document.querySelector(".reviews"),n=document.querySelectorAll(".slider-btn"),r=document.querySelectorAll(".review-card"),t=window.innerWidth;r.forEach((s,i,a)=>{const P=s.querySelector(".review-text"),y=s.querySelector(".review-name"),M=s.querySelector(".review-avatar"),A=s;s.style.height="302px";let d="16px",u=null,k=null,I=null,$=null;t>=1440?(i===a.length-2||i===a.length-1)&&(d="13.5px"):t>=768||t>=375?((i===a.length-2||i===a.length-1)&&(d="13.5px"),u="8px"):t<=374&&(d="15px",I="18px",(i===a.length-2||i===a.length-1)&&(u="4px"),(i<4||i===5)&&(u="8px",k="14px")),P&&(P.style.fontSize=d),y&&(y.style.marginBottom=u,y.style.marginTop=I),M&&(M.style.marginBottom=k??""),A&&(A.style.maxHeight=$)}),t===767&&(e.style.maxWidth="375px",e.style.padding="0 16px",o.style.padding="32px 0",n.forEach(s=>{s.style.width="52px",s.style.height="52px",s.style.padding="14px"})),t===1439&&(e.style.width="734px",e.style.padding="0 16px",o.style.padding="48px 0"),t===374&&(e.style.maxWidth="768px",e.style.padding="0 14.5px"),[767,1439,374].includes(t)||(e.style.removeProperty("max-width"),e.style.removeProperty("width"),e.style.removeProperty("padding"),o.style.removeProperty("padding"),n.forEach(s=>{s.style.removeProperty("width"),s.style.removeProperty("height"),s.style.removeProperty("padding")}))}f();window.addEventListener("resize",f);function oe(){const e=new h(".reviews-slider",{modules:[L,S],slidesPerView:1,slidesPerGroup:1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{375:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1440:{slidesPerView:4,slidesPerGroup:1}},on:{init:function(){w(this)},slideChange:function(){w(this)}}});w(e)}function w(e){e.isBeginning?v(g):B(g),e.isEnd?v(b):B(b)}function v(e){e.classList.add("swiper-button-disabled"),e.setAttribute("disabled","true")}function B(e){e.classList.remove("swiper-button-disabled"),e.removeAttribute("disabled")}function C(){v(g),v(b)}te();
//# sourceMappingURL=index.js.map
