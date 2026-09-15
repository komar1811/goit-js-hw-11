import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

function createGallery(images) {
  const galleryContent = [];
  for (const image of images) {
    const galleryItem = `<li class="gallery-item"><a class="gallery-link" href="${image.largeImageURL}"><img src="${image.webformatURL}" class="gallery-image" alt="${image.tags}" /></a><ul class="info"><li class="info-item"><p class="info-item-label">Likes</p><p class="info-item-value">${image.likes}</p></li><li class="info-item"><p class="info-item-label">Views</p><p class="info-item-value">${image.views}</p></li><li class="info-item"><p class="info-item-label">Comments</p><p class="info-item-value">${image.comments}</p></li><li class="info-item"><p class="info-item-label">Downloads</p><p class="info-item-value">${image.downloads}</p></li></ul></li>`;
    galleryContent.push(galleryItem);
  }
  gallery.insertAdjacentHTML('beforeend', galleryContent.join(''));
  let galler = new SimpleLightbox('.gallery li a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  galler.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  gallery.insertAdjacentHTML('beforebegin', '<div class="loader"></div>');
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.remove();
}

export default { createGallery, clearGallery, showLoader, hideLoader };
