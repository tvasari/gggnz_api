const express = require('express');
const cors = require('cors');
const knex = require('knex');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
    client: 'mysql',
    connection: {
        host: 'mysql.giuseppegnozzi.xyz',
        user: 'gggnz',
        password: '7KGYs98XfiBDr4f',
        database: 'gggnz'
    }
});

const app = express();
app.use(cors());

app.get('/', (req, res) => { res.send('It is working'); })

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

app.listen(3306, console.log(`listening to port 3306`));