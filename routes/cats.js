const express = require('express');
const router = express.Router();

const ROOT_URL = 'https://catfact.ninja/fact'

router.get('/fact', async function(req, res, next){

    const catData = await fetch(`${ROOT_URL}`)
        .then(res => res.json())

    res.render('cats/fact', {title: 'Cat Fact', catData})
})

module.exports = router