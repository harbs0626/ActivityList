let express = require('express');
let cors = require('cors');

const App = () => {
    let app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());

    let PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Your server is running on port ${PORT}`);
    })

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
