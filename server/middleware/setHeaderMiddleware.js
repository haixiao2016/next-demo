function setHeaderMiddleware() {
  return (req, res, next) => {
    console.log(req.lang)
    req.headers['lang'] = req.lang
    next()
  }
}

module.exports = setHeaderMiddleware