import express from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/users', (req, res) => {
    users.push(req.body)

    res.send('Usuário criado com sucesso!')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000)

34:00 
                  