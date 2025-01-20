import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 8080;
export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/cse341';
export const CORS_ALLOWED = [
  'http://127.0.0.1:5500',
  'http://localhost:8080',
  '*',
];
export const ENV = process.env.ENV || 'development';
export const DOMAIN = process.env.DOMAIN || 'http://localhost:8080';
