import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';

let datasources = null;

module.exports = (app) => {
    if (datasources !== null) return datasources;
    const config = app.config;

    const sequelize = new Sequelize(
        config.db.database,
        config.db.username,
        config.db.password,
        {
            host: config.db.params.host,
            dialect: config.db.params.dialect,
            define: config.db.params.define,
            logging: (app.config.debug.available) ? (msg) => app.logger.debug(msg) : false
        }
    );

    sequelize.authenticate()
        .then(() => {
            app.logger.info('Connection has been established successfully.');
        })
        .catch(err => {
            app.logger.error('Unable to connect to the database:', err);
        });

    datasources = {
        sequelize,
        Sequelize,
        models: {},
    };

    const dir = path.join(__dirname, '../models');

    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = sequelize.import(modelDir);

        if (model) {
            datasources.models[model.name] = model;
        }
    });

    Object.keys(datasources.models).forEach(key => {
        if ("associate" in datasources.models[key]) {
            datasources.models[key].associate(datasources.models);
        }
    });

    return datasources;
};