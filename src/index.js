import './sass/main.scss';
import {galleryItems} from './js/base';


  
const gallery = document.querySelector('.js-gallery');
const lightBoxImage = document.querySelector('.lightbox__image');
const modalWindow = document.querySelector('.js-lightbox');



const cardsMarkup = createsImageCardsMarkup (galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup );


function createsImageCardsMarkup (galleryItems) {

  return galleryItems.map(({preview, original, description }) => {
    return `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href=""
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
  } ).join('');
 
};

gallery.addEventListener('click', onOpenModalWindow);

function onOpenModalWindow (evt) {
  evt.preventDefault();

  if (evt.target.classList.value === 'gallery__image') {
    modalWindow.classList.add('is-open');
    lightBoxImage.src = evt.target.dataset.source;
    lightBoxImage.alt = evt.target.alt;
  }
  window.addEventListener('keydown', onCloseModalKey )
};

modalWindow.addEventListener('click', onCloseModalWindow);


function closeModal(){
  modalWindow.classList.remove('is-open');
  lightBoxImage.src = "";
  lightBoxImage.alt = "";
};

function onCloseModalWindow (evt) {
  
 if ( evt.target.dataset.action === "close-lightbox" || evt.target.className === 'lightbox__overlay') {
  closeModal()
 };
 onCloseModalKey ();
};



function onCloseModalKey (evt){
  
 if (evt.key === "Escape") {
    closeModal()
 }
};