const newsRoute = require('./news');
const siteRoute = require('./site');
const courseRoute = require('./course');  
const meRoute = require('./me');  
function route(app) {
    app.use('/news', newsRoute);
    app.use('/me', meRoute);
    app.use('/', siteRoute);
    app.use('/course', courseRoute);
}

module.exports = route;
