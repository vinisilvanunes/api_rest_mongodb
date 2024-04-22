const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

const contatoRouter = require('./routes/contatoRoutes');
app.use('/contatos', contatoRouter);

mongoose.connect(process.env.MONGODB_URI, {
    userNewUrlParse: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB'))
db.on('open', ()=>{
    console.log('Conectado ao MongoDB Atlas');
})

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`);
})