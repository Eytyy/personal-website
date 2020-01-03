const express = require('express')
const route = express.Router()
const client = require('../contentfulClient')

const getProjects = () =>
  client.getEntries({
    content_type: 'work',
    include: 3
  })

route.get('/', (req, res) => {
  getProjects()
    .then(payload =>
      payload.items[0].fields.work.filter(
        ({ fields }) => typeof fields !== 'undefined'
      )
    )
    .then(data => res.json(data))
    .catch(err => console.log(err))
})

const getProject = id => {
  const payload = client.getEntries({
    content_type: 'project',
    include: 3,
    'fields.slug': id
  })
  return payload
}

route.get('/:id', (req, res) => {
  getProject(req.params.id).then(payload => {
    return res.json(payload.items[0])
  })
})

module.exports = {
  route,
  getProjects,
  getProject
}
