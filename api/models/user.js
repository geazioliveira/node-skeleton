import bcrypt from 'bcrypt';

module.exports = (sequelize, DataType) => {

    const User = sequelize.define('user', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'users',
        timestamps: true,
        underscore: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    User.beforeSave((user, options) => {
        return cryptPassword(user.password)
            .then(success => {
                console.log("AQUI", success);
                user.password = success;
            })
            .catch(err => {
                if (err) console.log(err);
            });
    });
    User.beforeCreate((user, options) => {
        return cryptPassword(user.password)
            .then(success => {
                user.password = success;
            })
            .catch(err => {
                if (err) console.log(err);
            });
    });

    function cryptPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function (err, salt) {
                if (err) return reject(err);

                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) return reject(err);
                    return resolve(hash);
                });
            });
        });
    }

    return User;
}