import swaggerAutogen from 'swagger-autogen';
import { DOMAIN } from './config/config.js';

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Contacts API',
  },
  host: DOMAIN,
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen()(outputFile, routes, doc);
