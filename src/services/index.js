import axios from 'axios';
const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const getPhotos = async (page = 1, limit = 16) => {
  const url = `${API_URL}?_page=${page}&_limit=${limit}`;

  const response = await axios.get(url);

  if (response.status >= 200 && response.status < 300) {
    const totalCount = response.headers['x-total-count']
      ? parseInt(response.headers['x-total-count'])
      : 0;

    return {
      data: response.data,
      totalCount
    };
  } else {
    throw new Error('Unknow status');
  }
};
