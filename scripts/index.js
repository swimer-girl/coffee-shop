var t=document.querySelector(".header-menu__wrapper"),u=document.querySelector(".header-nav__toggle"),p=document.querySelector(".filter-range");t.classList.remove("header-nav--no-js");p.classList.remove("filter-range--nojs");u.addEventListener("click",()=>{t.classList.contains("header-nav--closed")?(t.classList.remove("header-nav--closed"),t.classList.add("header-nav--opened")):(t.classList.add("header-nav--closed"),t.classList.remove("header-nav--opened"))});new Swiper(".swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});var o=document.querySelector("#filter-range"),a=document.querySelector("#min-price"),i=document.querySelector("#max-price"),d=document.querySelector(".form__button[type=reset]"),c=[a,i];noUiSlider.create(o,{range:{min:0,max:970},start:[a.value?a.value:0,i.value],margin:50,step:1,behaviour:"snap",tooltips:!1,connect:!0,format:{to:function(e){return e.toFixed(0)},from:function(e){return parseFloat(e)}}});o.noUiSlider.on("update",(e,n)=>{c[n].value=e[n]});c.forEach((e,n)=>{e.addEventListener("change",()=>{o.noUiSlider.setHandle(n,e.value)})});d.addEventListener("click",()=>{o.noUiSlider.reset()});var l={title:"\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043C\u0430\u0433\u0430\u0437\u0438\u043D Drink2Go",lat:59.968356,lng:30.317568},s=L.map("map").setView({lat:59.96842076480187,lng:30.31748522083676},100);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(s);var m=e=>{let r=document.querySelector("#balloon").content.querySelector(".balloon").cloneNode(!0);return r.querySelector(".balloon__title").textContent=e.title,r.querySelector(".balloon__lat-lng").textContent=`\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B: ${e.lat}, ${e.lng}`,r},g=L.icon({iconUrl:"images/map/map-pin.svg",iconSize:[38,50],iconAnchor:[19,50]}),v=L.marker({lat:l.lat,lng:l.lng},{icon:g});v.addTo(s).bindPopup(m(l),{keepInView:!0});
