const express = require('express');
const cors = require('cors');
const knex = require('knex');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
});

const app = express();
app.use(cors());

app.get('/', (req, res) => {res.send('It is working');})

app.get('/homecards', (req, res) => {
  db.select('*').from('homecards').then(data => {
    res.send(data);
  });
})

app.get('/workscards', (req, res) => {
  db.select('*').from('workscards').then(data => {
    res.send(data);
  });
})

app.get('/sfondignz', (req, res) => {
  db.select('url').from('sfondignz').then(data => {
    res.send(data);
  });
})

app.listen(process.env.PORT || 3001, console.log(`listening to port ${process.env.PORT}`));