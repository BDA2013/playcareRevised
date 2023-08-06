const path = require('path');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

//var db = require("./models");

//creates a session
const sess = {
    secret: 'Super secret secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

//Engine for the handlebaers
app.engine('hbs', hbs.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs',
    defaultLayout: 'index'
}));

//sets the handlebars engine 
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.use(routes);

//const fakeAPI = () => "faker";

//const list = true;



app.listen(PORT, () => {
    console.log(`App listening to port ${PORT}! Visit http://localhost:${PORT} and create an account!`);
})