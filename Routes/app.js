const express = require('express')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

// define the home page route
router.get('/', (req, res) => {
    res.send('Hi There! Welcome to my Kubernetes Demo!')
});

router.get('/about', (req, res) => {
    res.send('Hi There! Welcome to my Kubernetes about page!')
})

// define the about route
module.exports = router