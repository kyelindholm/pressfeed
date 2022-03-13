import axios from 'axios';

const refreshFeed = async (section: string) => {
  const sectionParam = section.toLowerCase();
  const data = await axios.get(`http://localhost:8000/refreshfeed/?section=${sectionParam}`);
  return data;
}

export default refreshFeed;