/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.header-menu__wrapper');
const navToggle = document.querySelector('.header-nav__toggle');
const filterRange = document.querySelector('.filter-range');

navMain.classList.remove('header-nav--no-js');
filterRange.classList.remove('filter-range--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('header-nav--closed')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
  }
});

/* global Swiper:readonly */

new Swiper('.swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const range = document.querySelector('#filter-range');
const inputMinNumber = document.querySelector('#min-price');
const inputMaxNumber = document.querySelector('#max-price');
const resetButton = document.querySelector('.form__button[type=reset]');
const inputs = [inputMinNumber, inputMaxNumber];

noUiSlider.create(range, {
  range: {
    'min': 0,
    'max': 970,
  },
  start: [(inputMinNumber.value ? inputMinNumber.value : 0), inputMaxNumber.value],
  margin: 50,
  step: 1,
  behaviour: 'snap',
  tooltips: false,
  connect: true,
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

range.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = values[handle];
});

inputs.forEach((input, handle) => {
  input.addEventListener('change', () => {
    range.noUiSlider.setHandle(handle, input.value);
  });
});

resetButton.addEventListener('click', () => {
  range.noUiSlider.reset();
});

/* global L:readonly */
const pinTarget = {
  title: 'Интернет-магазин Drink2Go',
  lat: 59.968356,
  lng: 30.317568,
};

const map = L.map('map')
  .setView({
    lat: 59.96842076480187,
    lng: 30.31748522083676,
  }, 100);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

const markerIcon = L.icon({
  iconUrl: 'images/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: pinTarget.lat,
    lng: pinTarget.lng,
  },
  {
    icon: markerIcon,
  }
);

marker
  .addTo(map)
  .bindPopup(
    createCustomPopup(pinTarget),
    {
      keepInView: true,
    },
  );
