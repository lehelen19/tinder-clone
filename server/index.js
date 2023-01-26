const express = require('express');
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://helen:cat123@cluster0.hec6gyb.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
  res.json('Hello app');
});

app.post('/signup', (req, res) => {});

app.get('/users', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } catch {
    res.send('Failed to connect');
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
