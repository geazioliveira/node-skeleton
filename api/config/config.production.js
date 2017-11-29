const config = {

    /**
     * Debug
     */
    debug: {
        level: 'debug',
        available: true,
    },

    /**
     * Port Configuration
     *
     * @type {number}
     */
    port: 3000,

    /**
     * Database Configuration
     */
    db: {
        database: "cards",
        username: "root",
        password: "1234",
        params: {
            dialect: "mysql",
            host: "localhost",
            port: 3307,
            define: {
                freezeTableName: true,
                underscored: true
            }
        }
    }
};

module.exports = config;