"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("../config/config"));
const getConnection = () => {
    //crea la conexion
    const connection = mysql2_1.default.createConnection({
        database: config_1.default.DATABASE,
        user: config_1.default.DB_USER,
        password: config_1.default.DB_PASSWORD,
        host: config_1.default.DB_HOST,
        port: +config_1.default.DB_PORT //Es necesario el + para que tranaseforme el string a num
    });
    connection.connect((error) => {
        if (error) {
            throw error;
        }
        else {
            console.log('conexion exitosa');
        }
    });
    return connection;
};
const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        try {
            const connection = getConnection(); //Trata de realizar la conexion
            connection.query(query, (error, result) => {
                if (error) { //Maneja el error
                    reject(error);
                }
                else {
                    resolve(result); //Resuelve la promesa
                }
            });
            connection.end();
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};
exports.default = executeQuery;
//# sourceMappingURL=mysql.service.js.map