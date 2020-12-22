var mysql = require('mysql');
var utils = require('../fn/utils');

var createConnection = () => {
    return mysql.createConnection({
        host: utils.DB.HOST,
        port: utils.DB.PORT,
        user: utils.DB.USER,
        password: utils.DB.PWD,
        database: utils.DB.DB_NAME
    });
}

exports.load = function(sql) {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, function(error, rows, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }

            cn.end();
        });
    });
}

exports.insert = function(sql) {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value.insertId);
            }

            cn.end();
        });
    });
}

exports.delete = function(sql) {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value.affectedRows);
            }
            cn.end();
        });
    });
}

exports.update = function(sql) {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value.changedRows);
            }
            cn.end();
        });
    });
}