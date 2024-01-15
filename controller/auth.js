const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userModel = require('../models/user')

const saltRounds = 10

const register = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const hashedPassword = bcrypt.hashSync(password, saltRounds)

    const user = {
        username,
        password: hashedPassword
    }

    userModel.push(user)

    res.status(201).send(user)
}

const login = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const userDB = userModel.find((user) => user.username == username)

    if(!userDB) {
        return res.status(401).send("Username not found")
    }

    if(bcrypt.compareSync(password, userDB.password)) {
        const token = jwt.sign({ username: userDB.username }, process.env.JWT_TOKEN)

        res.json({ token })
    } else {
        return res.status(401).send('Wrong password')
    }
}

module.exports = {
    login,
    register
}
