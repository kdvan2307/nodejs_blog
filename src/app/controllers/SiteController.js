const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then(course => { 
                res.render('home', {
                    courses: multipleMongooseToObject(course)
                })
            })
            .catch(next);
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
