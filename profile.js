const express2 = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(express2.static('public'));


app.post('/submit-user', (req, res) => {
  const userData = req.body;
  MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, async (err, client) => {
    if (err) throw err;
    const db = client.db('userprofile');
    const collection = db.collection('string');
    const result = await collection.findOneAndUpdate(
      { email: userData.email },
      { $set: userData },
      { returnOriginal: false, upsert: true }
    );
    client.close();
    res.json(result.value);
  });
});

app.get('/users', (req, res) => {
  MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, async (err, client) => {
    if (err) throw err;
    const db = client.db('userprofile');
    const collection = db.collection('string');
    const users = await collection.find().toArray();
    client.close();
    res.json(users);
  });
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


const form = document.querySelector('#user-form');
const userList = document.querySelector('#user-list');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    age: formData.get('age')
  };
  const response = await fetch('/submit-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  const result = await response.json();
  console.log(result);
  updateUserList();
});

async function updateUserList() {
  const response = await fetch('/users');
  const users = await response.json();
  userList.innerHTML = '';
  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.name} (${user.email}) - Age ${user.age}`;
    userList.appendChild(li);
  });
}
