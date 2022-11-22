import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '31469555-49a38a455635c0ee6ed404ff1';

export async function fetchImg(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}