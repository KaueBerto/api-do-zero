get -> listar
post -> criar
put -> editar vários
patch -> editar UM
delete -> deletar

para criar uma rota é preciso:

1 - Tipo da rota / Método HTTP
2 - Endereço (ex:www.facebook.com/kaueberto)

app.get('/users')
app.post('/users')
app.delete('/users')
app.put('/users')

