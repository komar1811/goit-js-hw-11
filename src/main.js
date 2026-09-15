import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchBtn = document.querySelector('button.search-form-button');
const searchField = document.querySelector('input.search-form-input');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = searchField.value.trim();
  if (!query) {
    return;
  }

  clearGallery();
  showLoader();
  try {
    const images = await getImagesByQuery(query);
    if (images.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      createGallery(images);
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      position: 'topRight',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  } finally {
    hideLoader();
  }
});
