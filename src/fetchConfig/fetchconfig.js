import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://itunes.apple.com/'
});

export default instance;
