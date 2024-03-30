const path = require('path');
const express = require('express');
const session = require('express-session');
// Bring in handlebars package
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Enable handlebars helpers
const helpers = require('./utils/helpers');
// Store session data in DB
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// ---------------- Set timeout session ----------------
const sess = {
    secret: 'Session cookie secrets',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

// -------------------------------------------
app.engine('handlebars', exphbs());
app.use(express.static('views'));
app.get('/', (req, res) => {
    res.render('main.handlebars', { title: 'Home' });
});
// -------------------------------------------

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});


