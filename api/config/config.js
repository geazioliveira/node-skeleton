import winston from 'winston';

const config = require(`./config.${process.env.NODE_ENV || 'development'}.js`);
console.log(config.debug);
module.exports = (app) => {

    const logger = new (winston.Logger)({
        level: config.debug.level ? config.debug.level : 'debug',
        transports: [

            new (winston.transports.File)({filename: 'log/error.log', level: 'error'}),
            new (winston.transports.Console)({
                colorize: true
            })
        ]
    });

    app.config = config;
    app.logger = logger;
};