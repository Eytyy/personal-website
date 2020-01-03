import express, { json } from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import App from '../src/App/App'

const app = express()

const PORT = process.env.PORT || 3000
const DIST_DIR = __dirname

app.use(express.static(DIST_DIR))

const work = require('./routes/work')

app.use('/api/work', work.route)

app.get('/', (req, res) => {
  handleRender(req, res)
})

app.get('/work/:id', (req, res) => {
  work.getProject(req.params.id).then(payload => {
    const { title, description, image } = payload.items[0].fields.seo.fields
    handleRender(req, res, {
      title: `Work | ${title}`,
      image: image ? image.fields.file.url : image,
      description: description || title
    })
  })
})

function handleRender(req, res, content = {}) {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  )
  const url = req.protocol + '://' + req.get('host') + req.originalUrl
  res.send(renderFullPage(html, { ...content, url }))
}

const defaultDescription = `
Interaction designer and software engineer focusing on incorporating design and technology to research, design and build simple solutions for complicated problems.
`
const defaultTitle = `
Eyas Tayyem`

function renderFullPage(
  html,
  {
    title = defaultTitle,
    description = defaultDescription,
    image = 'https://images.ctfassets.net/f0pb5kelfu8f/6qFIidVPUBEbM7oVR03z7g/a75fe30a2dcb867602fcc16930726369/adw-m9.JPG?w=1920',
    url
  }
) {
  return `
	<!DOCTYPE html>
	<html lang="EN">
		<head>
			<meta charset="utf-8" />
			<meta content="width=device-width, initial-scale=1.0" name="viewport" />
			<title>${title}</title>
			<meta property="description" content="${description}" />
			<meta property="og:title" content="${title}" />
			<meta property="og:description" content="${description}" />
			<meta property="og:url" content="${url}" />
			<meta property="og:image" content="${image}" />
			<meta property="og:image:secure_url" content="${image}" />
		</head>
	
		<body>
			<div id="app">${html}</div>
			<script
				crossorigin
				src="https://unpkg.com/react@16/umd/react.production.min.js"
			></script>
			<script
				crossorigin
				src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
			></script>
			
		<script type="text/javascript" src="/app.bundle.js"></script></body>
	</html>
	`
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
