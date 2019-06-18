var cakes = require('../controllers/controllers.js');

module.exports = function(app){
    app.get('/cakes', (req, res) => {
        cakes.index(req, res);
    })
    app.get('/:id', (req, res) => {
        cakes.show(req, res);
    })
    app.post('/createComment/:id', (req, res) => {
        cakes.createComment(req, res);
    })
    app.post('/createCake', (req, res) => {
        cakes.createCake(req, res);
    })
    app.delete('/:id/delete', (req, res) => {
        cakes.deleteCake(req, res);
    })
}