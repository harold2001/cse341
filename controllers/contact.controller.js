import { ObjectId } from 'mongodb';
import { getDb } from '../database/connect.js';

const getContacts = async (req, res) => {
  const result = await getDb().db().collection('contacts').find({});
  result.toArray().then(contacts => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contactId = new ObjectId(id);
  const result = await getDb()
    .db()
    .collection('contacts')
    .find({ _id: contactId });
  result.toArray().then(contacts => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
};

export default { getContacts, getContactById };
