const DogController = require('../controllers/dogs.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post('/api/createDog', DogController.createDog)
    app.get('/api/getDogsByUser', authenticate, DogController.getDogsByUser)
    app.put('/api/updateDog', authenticate, DogController.updateDog)
    app.delete('/api/deleteDog', authenticate, DogController.deleteDog)
}