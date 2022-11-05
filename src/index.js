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
  AskModel.findAll({ order: [['ask_id', 'DESC']] }).then((questions) => {
    res.render('home', {
      questions: questions,
    });
  });
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

const port = 3333;
app.listen(port, () => {
  console.log('The applicatition is running on http://localhost:' + port);
});
