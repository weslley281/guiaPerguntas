const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./src/public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/parametros/:nome?', (req, res) => {
  const name = req.params.nome ? req.params.nome : 'eu';
  const lang = 'portugues do brasil';
  const showMessage = true;

  const clients = [
    { name: 'Fulano de tal', age: 24 },
    { name: 'Cicrano de tal', age: 26 },
    { name: 'Deltrano de tal', age: 28 },
    { name: 'Beltrana de tal', age: 32 },
  ];

  res.render('index', {
    name,
    lang,
    company: 'Baobá Brasil',
    showMessage,
    clients,
  });
});

const port = 3333;
app.listen(port, () => {
  console.log('The applicatition is running on http://localhost:' + port);
});
