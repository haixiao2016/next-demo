function setHeaderMiddleware() {
  return (req, res, next) => {
    req.headers['lang'] = req.lang
    next()
  }
}

module.exports = setHeaderMiddleware