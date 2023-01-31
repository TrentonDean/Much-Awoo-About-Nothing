const loginControllers = require('../controllers/login.controllers')

module.exports = app => {

    app.post('/api/register', loginControllers.register)
    app.post('/api/login', loginControllers.login)
    app.post('/api/logout', loginControllers.logout)
    app.get('/api/currentUser', loginControllers.getLoginUser)
    app.put('/api/user/:id', loginControllers.updateUser)
}