import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://prestservbackend-env.eba-tyu39hpm.us-east-1.elasticbeanstalk.com'
});

export {api};