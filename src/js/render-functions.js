import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250, 
    overlayOpacity: 0.8,
    animationSpeed: 300,
});
const containerEl = document.querySelector(".container");
let images = [];
export function createGallery(images) {

    const markup = images
    .map((image) => {
       return `
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
        </a>
      `;
    })
    .join('');
    containerEl.insertAdjacentHTML("beforeend", markup);
}

const galleryEl = document.querySelector('.gallery');
export function clearGallery() {
    galleryEl.innerHTML = '';
}

const loader = document.querySelector('.loader');
export function showLoader() {
    loader.classList.add('is-active');
}

export function hideLoader() {
    loader.classList.remove('is-active');
}