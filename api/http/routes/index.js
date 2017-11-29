/**
 * Home Routers
 *
 * @param app
 * @returns {*}
 */
module.exports = (app) => {

    const HomeController = app.http.controllers.home;

    app.get('/', HomeController.home);

    return this;
};