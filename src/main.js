import { getImagesByQuery } from '../js/pixabay-api';
import renderFunctions from '../js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const searchBtn = document.querySelector('button.search-form-button');
const searchField = document.querySelector('input.search-form-input');

form.addEventListener('submit', async event => {
  event.preventDefault();
  renderFunctions.clearGallery();
  renderFunctions.showLoader();
  const images = await getImagesByQuery(searchField.value);
  renderFunctions.hideLoader();
  if (images.length === 0) {
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    renderFunctions.createGallery(images);
  }
});
