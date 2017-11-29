module.exports = (app) => {

    const UserModel = app.config.datasources.models.user;

    class UsersRepository {

        static findAll() {
            return UserModel.findAll();
        }

        static findById(id) {
            return UserModel.findById(id);
        }

        static saveUser(req, res) {
            return UserModel.create(req.body);
        }

        static editUser(id, req, res) {
            return UserModel.findById(id).then((user) => {
                return user.update(req.body);
            });
        }

        static delete(id) {
            return UserModel.findById(id).then((user) => {
                return user.destroy();
            });
        }

    }

    return UsersRepository;
};
