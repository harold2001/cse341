import express from 'express';
import { PORT } from './config/config.js';
import { validateCORS } from './middleware/middleware.js';
import { initDb } from './database/connect.js';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(validateCORS);
app.use('/', routes);

initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
  }
});
