const express = require('express')
const app = express()
const port = 3010

app.use(express.static(__dirname))
console.log(__dirname);

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})