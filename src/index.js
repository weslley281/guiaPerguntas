const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/parametros/:nome?', (req, res) => {
  const name = req.params.nome ? req.params.nome : 'eu';
  const lang = 'portugues do brasil';

  res.render('index', { name, lang, company: 'Baobá Brasil' });
});

const port = 3333;
app.listen(port, () => {
  console.log('The applicatition is running on http://localhost:' + port);
});
