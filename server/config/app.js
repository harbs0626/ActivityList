let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let cors = require('cors');
let auth = require('./auth');
let database = require('./db');
let userConfig = require('./userConfig');

const App = () => {
    let app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());

    let PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Your server is running on port ${PORT}`);
    })

    // ** Set authentication modules
    app.use(auth.session({
        secret: database.Secret, 
        saveUninitialized: false, 
        resave: false }));
    app.use(auth.flash());
    app.use(auth.passport.initialize());
    app.use(auth.passport.session());

    // ** Set passport user configuration
    userConfig.SetPassport({
        passport: auth.passport, 
        extractJWT: auth.extractJWT, 
        strategyJWT: auth.strategyJWT,
        dbSecret: database.Secret
    });

    // ** Set landing page
    //app.use(express.static(path.join(__dirname, '../../client/public/index.html')));
    //app.use(express.static('../client/', {index: 'login.html'}));

    // ** Initialize routes
    let usersRouter = require('../routes/user');
    let activityRouter = require('../routes/activity');
    app.use('/api/user', usersRouter);
    app.use('/api/activity', activityRouter);

    // ** Error handling
    app.use((req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err: {};

        res.status(err.status || 500);
        res.sender('error', { title: 'Error' });
    });
}

module.exports = { App };
