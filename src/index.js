const express = require('express')

const app = express()

app.get('/projects', (request, response) => {
  return response.send({ message: 'Hello World' })
 })

app.listen(4000, () => console.log('🌹 Server started on port 4000'))
