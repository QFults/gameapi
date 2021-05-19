const express = require('express')
const axios = require('axios')
const app = express()

app.get('/games/:search', (req, res) => {
  axios.get(`https://api.rawg.io/api/games?key=dd099687bd824636b96236d7352a90da&search=${req.params.search}`)
    .then(r => {
      res.json(r.data.results)
    })
    .catch(err => console.error(err))
})

app.listen(process.env.PORT || 3000)
