/**
 * User Routers
 *
 * @param app
 * @returns {*}
 */
module.exports = (app) => {

    const UsersController = app.http.controllers.users;

    app.get('/users', UsersController.getUsers);
    app.get('/users/:id', UsersController.getUser);
    app.post('/users', UsersController.postSaveUser);
    app.put('/users/:id', UsersController.putSaveUser);
    app.delete('/users/:id', UsersController.deleteUser);

    return this;
};