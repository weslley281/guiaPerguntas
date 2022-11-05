const Sequelize = require('sequelize');
const connection = require('./database');

const Ask = connection.define('ask', {
  ask_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Ask.sync({ force: false }).then(() => {
  console.log('Tabela de perguntas criada');
});

module.exports = Ask;
