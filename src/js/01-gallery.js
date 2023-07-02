import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector('.gallery');

const original = galleryItems.map(image => image.original);

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>  `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__item', {
  sourceAttr: 'href',
  captionsData: 'alt',
  captionPosition: 'outside',
  captionDelay: 250,
});
