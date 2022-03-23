const express = require('express')
const app = express()
const port = 2121

app.get('/', (_req, res) => {
  res.send('Hello !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
