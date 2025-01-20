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
    if (contacts.length === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contacts[0]);
  });
};

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newContact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };

    const result = await getDb()
      .db()
      .collection('contacts')
      .insertOne(newContact);

    if (result.acknowledged) {
      return res
        .status(201)
        .json({ message: 'Contact created', data: newContact });
    }

    res.status(500).json({ message: 'Error creating contact' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const updateContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contactId = new ObjectId(id);

    const updatedContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday,
    };

    const result = await getDb()
      .db()
      .collection('contacts')
      .findOneAndReplace({ _id: contactId }, updatedContact, {
        returnDocument: 'after',
      });

    if (result) {
      return res.status(200).json({ message: 'Contact updated', data: result });
    }

    res.status(404).json({ message: 'Contact not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

const deleteContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contactId = new ObjectId(id);
    const result = await getDb()
      .db()
      .collection('contacts')
      .findOneAndDelete({ _id: contactId });

    if (result) {
      return res.status(200).json({ message: 'Contact deleted', data: result });
    }

    res.status(404).json({ message: 'Contact not found' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error?.message });
  }
};

export default {
  getContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
};
