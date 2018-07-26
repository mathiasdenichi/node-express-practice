const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send({ hi: 'meow'})
})

app.listen(5000)