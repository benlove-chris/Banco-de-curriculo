const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();



mongose.connect('mongodb+srv://chris:chriswelcome@cluster0.sns5m.mongodb.net/cadastroCandidatos', {
    useNewUrlParser: true
});

app.use(cors( ));
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);



app.listen(process.env.PORT || '5000');