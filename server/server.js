const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev, dir: '.'})
const handle = app.getRequestHandler()
const bodyParser = require('body-parser')

// const SendEmail = require('./google-mailer')
const SendEmail = require('./sendgrid-mailer')

app
  .prepare()
  .then(() => {
    const server = express()

    //maping url
    // server.get('/project/:id', (req, res) => {
    //   const actualPage = '/project'
    //   const queryParams = {id: req.params.id, title: req.params.id}
    //   app.render(req, res, actualPage, queryParams)
    // })

    // server.get('/test/:id', (req, res) => {
    //   const actualPage = '/mytest'
    //   const queryParams = {title: req.params.id}
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
      // console.log('req', req);
      return handle(req, res)
    })

    server.post('/api/submit', (req, res) => {
      const {email = '', name = '', message = ''} = req.body

      SendEmail({email, name, text: message})
        .then(resp => {
          console.log('resp', resp)
          res.send(resp)
        })
        .catch(error => {
          console.log('error', error)
          res.send(error)
        })

      // res.send('success')
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error('Server Error', ex.stack)
    process.exit(1)
  })
