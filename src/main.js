import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('.form');
const searchInput = searchForm.querySelector('input[name="search-text"]');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;
  
    clearGallery();
    showLoader();
  
    getImagesByQuery(query)
      .then(data => {
        if (!data.hits || data.hits.length === 0) {
          iziToast.error({  
            message: `Sorry, there are no images matching your search ${query}. Please try again!` 
          });
        } else {
          createGallery(data.hits);
        }
      })
      .catch(error => {
        iziToast.error({ 
          message: error.message 
        });
      })
      .finally(() => {
        hideLoader();
      });
  });