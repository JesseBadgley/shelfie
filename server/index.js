require('dotenv').config();
const express = require ('express');
const massive = require ('massive');
const controller = require ('./controller');

const app = express ();

const {SERVER_PORT} = process.env;


app.use(express.json())



app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} is running like wild horses in heat.`));
