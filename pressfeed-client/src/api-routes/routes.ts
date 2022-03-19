import axios from 'axios';

export const refreshFeed = async (section: string) => {
  const sectionParam = section.toLowerCase();
  const data = await axios.get(`http://54.166.64.94:8000/refreshfeed/?section=${sectionParam}`);
  return data;
}

export const addToDatabase = async (article: object) => {
  const response = await axios.post('http://54.166.64.94:8000/add', {data: article});
  return response;
}

export const removeFromDatabase = async (url: string) => {
  const response = await axios.post('http://54.166.64.94:8000/remove', {url: url});
  return response;
}

export const getFavorites = async () => {
  const response = await axios.get(`http://54.166.64.94:8000/favorites`);
  return response.data;
}


