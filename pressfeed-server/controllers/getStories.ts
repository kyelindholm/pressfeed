import axios from 'axios';

const getStories = async (section: string = 'home', key: string) => {
  let data = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`);
  return(data.data.results);
}

module.exports = { getStories };