"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionescontroller_1 = require("../controllers/cancionescontroller");
const usuariosRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/listar', cancionescontroller_1.listar);
    router.get('/usuario/:id', cancionescontroller_1.usuario);
    router.post('/Registrar', cancionescontroller_1.Registrar);
    router.put('/actualizarUsuario/:id', cancionescontroller_1.actualizarUsuario);
    router.delete('/eliminarUsuario/:id', cancionescontroller_1.eliminarUsuario);
};
exports.default = usuariosRoutes;
//# sourceMappingURL=usuarios.js.map