const dotEnv = require('dotenv')

if (process.env.NODE_ENV !== 'prod') {
    const configFile = `./.env.${process.env.NODE_ENV}`
    dotEnv.config({ path: configFile })
} else {
    dotEnv.config()
}

module.exports = {
    PORT: process.env.PORT,
    PORT_SQL: process.env.PORT_SQL,
    HOST_SQL: process.env.HOST_SQL,
    USER_SQL: process.env.USER_SQL,
    PASSWORD_SQL: process.env.PASSWORD_SQL,
    DATABASE_SQL: process.env.DATABASE_SQL
}