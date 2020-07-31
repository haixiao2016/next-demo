const express = require('express')
const next = require('next')
const i18nMiddleware = require('next-translate/i18nMiddleware').default
const i18nConfig = require('../i18n')
const setHeaderMiddleware = require('./middleware/setHeaderMiddleware')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = express()
const PORT = parseInt(process.env.PORT, 10) || 4444

// You should add this middleware
server.use(i18nMiddleware(i18nConfig))
server.use(setHeaderMiddleware())

const allLanguages = i18nConfig.allLanguages
for (const lang of allLanguages) {
  server.get(`/_next/data/*/${lang}/*.json`, (req, res)=> {
    return res.redirect(301, req.url.replace(`/${lang}/`, "/"))
  })
}
server.get('*', handle)

module.exports = app
  .prepare()
  .then(() =>
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${PORT}`)
    })
  )
  .catch(console.error)