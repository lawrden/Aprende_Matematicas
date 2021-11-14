"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarUsuario = exports.actualizarUsuario = exports.Registrar = exports.usuario = exports.listar = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const listar = (req, res) => {
    (0, mysql_service_1.default)('SELECT * FROM usuariobe').then(//invoco el metodo previamente creado que ejecuta el query
    (response) => {
        res.json(response);
    }).catch((error) => {
        res.status(500).send(error); //Envia el status del error al postman
    });
};
exports.listar = listar;
const usuario = (req, res) => {
    const { id } = req.params;
    (0, mysql_service_1.default)(`SELECT * FROM usuariobe WHERE idusuario = ${id}`).then(//invoco el metodo previamente creado que ejecuta el query
    (response) => {
        //listar;
        const data = {
            message: `${response.length} datos encontrados`,
            datos: response.length > 0 ? response[0] : null
        };
        //res.json(response);
        res.json(data);
    }).catch((error) => {
        res.status(500).send(error); //Envia el status del error al postman
    });
};
exports.usuario = usuario;
const Registrar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, email, contra, grado, edad, idusuario } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO usuariobe (nombres,apellidos,email,contra,grado,edad,idusuario) VALUES ('${nombres}','${apellidos}','${email}','${contra}','${grado}','${edad}', null)`);
        res.status(201).json({ message: 'created', id: response.insertId });
        console.log(response);
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
exports.Registrar = Registrar;
const actualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombres, apellidos, email, contra, grado, edad, idusuario } = req.body;
    try {
        const response = yield (0, mysql_service_1.default)(`UPDATE usuariobe SET nombres = '${nombres}', apellidos = '${apellidos}', email = '${email}', contra = '${contra}', grado = '${grado}', edad = '${edad}' WHERE idusuario= ${req.params.id}`);
        // res.status(201).json({message: response.affectedRows > 0 ? 'updated' :`No existe  registro con id: ${req.params.id}` });
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'updated' });
        }
        else {
            res.status(404).json({ message: `No existe  registro con id: ${req.params.id}` });
        }
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
exports.actualizarUsuario = actualizarUsuario;
const eliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`DELETE FROM usuariobe WHERE idusuario= ${req.params.id}`);
        console.log(response);
        if (response.affectedRows > 0) {
            res.json({ message: 'deleted' });
        }
        else {
            res.status(404).json({ message: `No existe  registro con id: ${req.params.id}` });
        }
    }
    catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
});
exports.eliminarUsuario = eliminarUsuario;
//# sourceMappingURL=usuarioscontroller.js.map