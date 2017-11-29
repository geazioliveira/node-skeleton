/**
 * Home Controller
 *
 * @param app
 * @returns {*}
 */
module.exports = (app) => {

    const UsersRepository = app.repositories.users;

    class UsersController {

        /**
         * Save User
         *
         * @param req
         * @param res
         * @param next
         */
        static postSaveUser(req, res, next) {
            UsersRepository.saveUser(req, res).then((user) => {
                res.status(200)
                    .send(user);
            }).catch((err) => {
                res.status(400)
                    .send({
                        "message": "Não foi possivel salvar o usuário",
                        "error": err
                    });
            });
        };

        /**
         * Edit User
         *
         * @param req
         * @param res
         * @param next
         */
        static putSaveUser(req, res, next) {
            var id = req.params.id;

            UsersRepository.editUser(id, req, res).then((user) => {
                res.status(200)
                    .send(user);
            }).catch((err) => {
                res.status(400)
                    .send({
                        "message": "Não foi possivel editar o usuário",
                        "error": err
                    });
            });
        };

        /**
         * Get All Users
         *
         * @param req
         * @param res
         * @param next
         */
        static getUsers(req, res, next) {
            UsersRepository.findAll().then((users) => {
                res.status(200)
                    .send(users);
            }).catch((err) => {
                res.status(400)
                    .send({
                        "message": "Não foi possivel listar os usuários",
                        "error": err
                    });
            })
        };

        /**
         * Get One user
         *
         * @param req
         * @param res
         * @param next
         */
        static getUser(req, res, next) {
            let id = req.params.id;

            UsersRepository.findById(id).then((user) => {
                res.status(200)
                    .send(user);
            }).catch((err) => {
                res.status(400)
                    .send({
                        "message": "Não foi possivel listar o usuário",
                        "error": err
                    });
            })
        };

        /**
         * Delete one User
         *
         * @param req
         * @param res
         * @param next
         */
        static deleteUser(req, res, next) {
            let id = req.params.id;

            UsersRepository.delete(id).then((user) => {
                res.status(200)
                    .send(user);
            }).catch((err) => {
                res.status(400)
                    .send({
                        "message": "Não foi possivel deletar o usuário",
                        "error": err
                    });
            })
        };
    }

    return UsersController;
};