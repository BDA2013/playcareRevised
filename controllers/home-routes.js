const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('main', {
            layout: 'index'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/register', (req, res) => {
    try {
        res.render('newUserInfo', {
            layout: 'signup' 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }   
});

module.exports = router;