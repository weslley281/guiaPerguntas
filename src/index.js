const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const AskModel = require('./database/pergunta');

//banco de dados
connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

//define o ejs
app.set('view engine', 'ejs');
//define os arquivos estáticos
app.use(express.static('./src/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/ask', (req, res) => {
  res.render('ask');
});

app.post('/saveask', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  AskModel.create({
    title: title,
    description: description,
  })
    .then(() => {
      res.redirect('/');
    })
    .catch((msgErro) => {
      console.log(msgErro);
    });
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
