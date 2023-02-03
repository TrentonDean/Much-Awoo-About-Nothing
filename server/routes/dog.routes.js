const DogController = require('../controllers/dogs.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/createDog', authenticate, DogController.createDog)
    app.get('/api/getDogsByUser', DogController.getDogsByUser)
    app.put('/api/updateDog/:id', authenticate, DogController.updateDog)
    app.delete('/api/deleteDog/:id', authenticate, DogController.deleteDog)
}