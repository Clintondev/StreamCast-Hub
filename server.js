// server.js
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const radioRoutes = require('./routes/radioRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "https://unpkg.com", "'unsafe-inline'"],
      },
    })
  );
  

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', radioRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
