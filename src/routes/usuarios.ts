import {Router} from "express";
import { actualizarUsuario, Registrar, eliminarUsuario, usuario, listar } from "../controllers/usuarioscontroller";

const usuariosRoutes = (app)=>{
    const router = Router();
    app.use('/',router);

    router.get('/listar', listar);
    router.get('/usuario/:id', usuario);
    router.post('/Registrar', Registrar);
    router.put('/actualizarUsuario/:id', actualizarUsuario);
    router.delete('/eliminarUsuario/:id', eliminarUsuario);
    


}

export default usuariosRoutes;