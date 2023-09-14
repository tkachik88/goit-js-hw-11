import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';

const PARAMS = new URLSearchParams({
  key: '39440087-6fc5349d59dc9d4dcc07ac9eb',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
});

async function fetchImages(q, page) {
  const resp = await axios.get(`${BASE_URL}?${PARAMS}&q="${q}"&page=${page}`);
  return resp;
}

export { fetchImages };
