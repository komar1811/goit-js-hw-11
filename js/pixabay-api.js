import axios from 'axios';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '57593792-7eb08ac6b23e15d152ead06e9',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch();
}
