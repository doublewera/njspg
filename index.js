/* POSTGRESQL */

/* const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'tutor',
  host: 'localhost',
  database: 'academy_top',
  port: 5432,
});

pool.query(
    'SELECT * from student',
    (error, results) => {
        if (error) {
            console.log(error)
        } 
        console.log(results.rows);
    });*/

/* WEB APPLICATION */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
const port = 3001;
    
app.get('/', (req, res) => {
  res.status(200).send(`<form action="/hi" method="post">
            <input name="myname">
            <input type="number">
            <input type="submit" value="Посылаю">
        </form>`);
});

app.post('/hi', (req, res) => {
  console.log(req)
  console.log(JSON.stringify(req.body))
});

app.get('/hi/', (req, res) => {
  console.log('Ура, я вижу URL: ', req.url)
  console.log('Объект с переменными: ', req.query)
  //console.log(req);
//  res.status(200).send('Hello World!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});