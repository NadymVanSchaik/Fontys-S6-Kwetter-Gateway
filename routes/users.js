const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var jsonParser = bodyParser.json();
const axios = require('axios').default;



router.get('/all', function(req, res) {
    axios.get('http://kwetter.nadym.nl:3000/users/all')
        .then((response) => {
            res.json(response.data)
        })
        .catch((error) => {
            res.json({message: error})
        })
});

router.post('/', jsonParser, (req, res) => {
    axios.post('http://kwetter.nadym.nl:3000/users/', req.body)
    .then((response) => {
        res.json(response.data)
    })
    .catch((error) => {
        res.json({message: error})
    })
})

router.patch('/:id', jsonParser, (req, res) => {
    const url = 'http://kwetter.nadym.nl:3000/users/' + req.params.id
    axios.patch(url, req.body)
    .then((response) => {
        res.json(response.data)
    })
    .catch((error) => {
        res.json({message: error})
    })
})

router.delete('/:id', jsonParser, (req, res) => {
    const url = 'http://kwetter.nadym.nl:3000/users/' + req.params.id
    axios.delete(url, req.body)
    .then((response) => {
        res.json(response.data)
    })
    .catch((error) => {
        res.json({message: error})
    })
})

module.exports = router;