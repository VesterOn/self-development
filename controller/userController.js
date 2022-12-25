const { sqlBase } = require('../database/connection/connection.js')
const bcrypt = require('bcrypt')

const registration = async (req, res) => {
    let { Username, Login, Password } = req.body
    const objRes = await sqlBase.query(`SELECT * FROM public."Users" Where "Login" = $1`, [])
    const foundUser = Object.keys(objRes.rows).length === 1
    if (foundUser)
        return res.status(500).json({ error: "Пользователь существует" })

    let hashPassword = bcrypt.hashSync(Password, salt)

    sqlBase.query(`INSERT INTO public."Users"("Username", "Login", "Password") VALUES ($1, $2, $3)`,
        [Username, Login, hashPassword])
    return res.status(200).json({ result: "Успешно" })
}

const login = async (req, res) => {
    let { Login, Password } = req.body
    const objRes = await (await sqlBase.query(`Select "Password" from public."Users" Where "Login" like $1 `, [Login])).rows
    const loginExists = Object.keys(objRes).length === 0

    if (loginExists)
        return res.status(500).json({ error: "Некорекнтый логин/пароль" })

    let comparePassword = bcrypt.compareSync(Password, objRes[0].Password)

    if (!comparePassword)
        return res.status(500).json({ error: "Некорекнтый логин/пароль" })

    return res.status(200).json({ result: "Вошли успешно" })
}

module.exports = {
    registration,
    login
}