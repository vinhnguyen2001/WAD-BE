const userRoute = require('./user.route');
const authRoute = require('./auth.route');

function route(app) {

    app.use('/auth', authRoute);
}

module.exports = route;