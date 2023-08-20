import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '38158764-820b680c529367ace5249e2e2';
export async function fetchQuery(searchQuery, page) {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    safesearch: true,
  });

  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&${searchParams}`
    );

    const images = response.data.hits.map(
      ({ id, webformatURL, largeImageURL, tags }) => {
        return {
          id,
          webformatURL,
          largeImageURL,
          tags,
        };
      }
    );
    return { images, totalImages: response.data.totalHits };
  } catch (error) {
    console.log(error);
  }
}
