require('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const controller = require ('./controller');

const app = express ();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
},
console.log('It is working.'))
.catch(err => console.log(err));

app.use(express.json())

app.get('/api/inventory/', controller.getAll)
app.get('/api/product/:id', controller.getOne)
app.post('/api/product/', controller.addProduct)
app.delete('/api/product/:id', controller.deleteProduct)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is running like wild horses in heat.`));
