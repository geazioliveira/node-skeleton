/**
 * Home Controller
 *
 * @param app
 * @returns {*}
 */
module.exports = (app) => {

    const UsersRepository = app.repositories.users;

    class HomeController {

        /**
         * Home Action
         *
         * @param req
         * @param res
         * @param next
         */
        static home(req, res, next) {
            app.logger.info("Aqui");
            res.send(UsersRepository.getTextUser());
        }
    }

    return HomeController;
};