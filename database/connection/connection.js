const { Client } = require('pg')

const sqlBase = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Soltek0903',
    database: 'sqlTest'
})

sqlBase.connect().then(() => console.log('Connect postgreSql')).catch((err) => console.log(err))

module.exports = {
    sqlBase
}
