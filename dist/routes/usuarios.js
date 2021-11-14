"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioscontroller_1 = require("../controllers/usuarioscontroller");
const usuariosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/listar', usuarioscontroller_1.listar);
    router.get('/usuario/:id', usuarioscontroller_1.usuario);
    router.post('/Registrar', usuarioscontroller_1.Registrar);
    router.put('/actualizarUsuario/:id', usuarioscontroller_1.actualizarUsuario);
    router.delete('/eliminarUsuario/:id', usuarioscontroller_1.eliminarUsuario);
};
exports.default = usuariosRoutes;
//# sourceMappingURL=usuarios.js.map