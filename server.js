const express = require('express');
const app = express();
const port = 3001;

const hbs = require('express-handlebars');

app.engine('hbs', hbs.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs',
    defaultLayout: 'index'
}));

app.set('view engine', 'hbs');

app.use(express.static('public'));

const fakeAPI = () => "faker";

const list = true;

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', goodNoodle: fakeAPI(), /* listExists: list */})
});

app.listen(port, () => {
    console.log(`App listening to port ${port}!`);
})