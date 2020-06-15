const express = require('express')

const app = express()

app.use(express.json())

app.get('/projects', (request, response) => {
  return response.json([
    'Project 1',
    'Project 2'
  ])
})

app.post('/projects', (request, response) => {
  return response.json([
    'Project 1',
    'Project 2',
    'Project 3'
  ])
})

app.put('/projects/:id', (request, response) => {
  return response.json([
    'Project 4',
    'Project 2',
    'Project 3'
  ])
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Project 2',
    'Project 3'
  ])
})

app.listen(4000, () => console.log('🌹 Server started on port 4000'))
