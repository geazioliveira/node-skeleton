module.exports = app => {
    app.listen(app.config.port, () => app.logger.info('Start API'));
}