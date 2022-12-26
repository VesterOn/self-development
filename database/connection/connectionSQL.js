const { Client } = require('pg')
require('dotenv').config()

const sqlBase = new Client({
    host: process.env.HOST_SQL,
    port: process.env.PORT_SQL,
    user: process.env.USER_SQL,
    password: process.env.PASSWORD_SQL,
    database: process.env.DATABASE_SQL
})

sqlBase.connect().then(() => console.log('Connect postgreSql')).catch((err) => console.log(err))

module.exports = {
    sqlBase
}
