const express = require('express');

const bodyParser = require('body-parser');

const { check, validationResult } = require('express-validator');

const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');


app.use(express.json());

app.get('/', (request, response)=>{
    response.render('contact', {errors: ''});
    })