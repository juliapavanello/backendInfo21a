const sequelize = require("sequelize");
require('dotenv').config()

const conexao = new sequelize(
    process.env.DB_HOST,
    {dialect:"postgress"}
)

module.exports = { conexao }