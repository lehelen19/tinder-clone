const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');

const uri = `mongodb+srv://helen:cat123@cluster0.hec6gyb.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.get('/', (req, res) => {
  res.json('Hello app');
});

app.post('/signup', async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;
  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    // Check if user exists
    console.log(email);
    if (await users.findOne({ email })) {
      return res.status(409).send('User already exists. Please log in.');
    }

    // Organize user data
    const sanitizedEmail = email.toLowerCase();
    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };

    // Send to database
    const insertedUser = await users.insertOne(data);

    // Generate a token to stay logged into app
    const token = jwt.sign(insertedUser, sanitizedEmail, { expiresIn: 1440 });

    res.status(201).json({ token });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
});

app.post('/login', async (req, res) => {
  const client = new MongoClient(uri);
  const { email, password } = req.body;
  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const user = await users.findOne({ email });
    const isCorrectPassword = await bcrypt.compare(
      password,
      user.hashed_password
    );
    if (user && isCorrectPassword) {
      // create token
      const token = jwt.sign(user, email, { expiresIn: 1440 });
      res.status(201).json({ token });
    }
    res.status(400).send('Invalid credentials');
  } catch (err) {
    console.log(err);
  }
});

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
