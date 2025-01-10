import { MongoClient } from 'mongodb';
import { DB_URI } from '../config/config.js';

let _db;

export const initDb = callback => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(DB_URI)
    .then(client => {
      _db = client;
      callback(null, _db);
    })
    .catch(err => {
      callback(err);
    });
};

export const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};
