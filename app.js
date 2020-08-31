const Express = require('express')
const app = Express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/xxx', (req, res) => {
  res.send('Hello fuck!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})