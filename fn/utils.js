var utils = {
    GENERAL: {
        PRODUCTS_PER_PAGE: 6
    },

    ACCESS_TOKEN: {
        SECRET_KEY: 'secret',
        LIFETIME: 600 // in seconds
    },

    REFRESH_TOKEN: {
        SIZE: 80
    },
    mail:{
        user:'xuanbachpg@gmail.com',
        pass:'xuanbach123@'
    },
    DB: {
        HOST: 'localhost',
        PORT: '3306',
        USER: 'root',
        PWD: 'root',
        DB_NAME: 'web-on-tap'
    }
}
 

module.exports = utils;