import { CORS_ALLOWED } from '../config/config.js';

export const validateCORS = (req, res, next) => {
  const { origin } = req.headers;
  if (CORS_ALLOWED.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin ?? '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  } else {
    res.status(403).send('CORS not allowed');
  }
};
