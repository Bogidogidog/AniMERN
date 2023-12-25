const animeRouter = require("express").Router();

animeRouter.get('/animetop', async (req, res) => {
    const response = await fetch("https://api.jikan.moe/v4/top/anime")
    const data = await response.json()
    res.json(data)
})
animeRouter.post('/anime', async (req, res) => {
    
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${req.body}&sfw`)
    const data = await response.json()
    
    res.json(data)
})


module.exports = animeRouter;