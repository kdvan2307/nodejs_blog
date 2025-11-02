class NewController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        res.send('New detail page');
    }
}

module.exports = new NewController();
