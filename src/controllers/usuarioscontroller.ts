import executeQuery from "../services/mysql.service";

const listar = (req, res) =>{
    executeQuery('SELECT * FROM usuariobe').then(//invoco el metodo previamente creado que ejecuta el query
        (response) =>{//Maneja la respuesta positiva
            res.json(response);

        }).catch((error) =>{//Maneja la respuesta negativa
            res.status(500).send(error);//Envia el status del error al postman
        });
}
const usuario = (req, res) =>{
    const {id} = req.params;
    executeQuery(`SELECT * FROM usuariobe WHERE idusuario = ${id}`).then(//invoco el metodo previamente creado que ejecuta el query
        (response) =>{//Maneja la respuesta positiva
            //listar;
            const data ={
                message: `${response.length} datos encontrados`,
                datos: response.length >0 ? response[0] : null
            }

            
            //res.json(response);
            res.json(data);

        }).catch((error) =>{//Maneja la respuesta negativa
            res.status(500).send(error);//Envia el status del error al postman
        });


}
const Registrar = async(req, res) =>{
    const {nombres,apellidos,email,contra,grado,edad,idusuario} = req.body;

    try{
        const response = await executeQuery(`INSERT INTO usuariobe (nombres,apellidos,email,contra,grado,edad,idusuario) VALUES 
        ('${nombres}','${apellidos}','${email}','${contra}','${grado}','${edad}', null)`);
        
        res.status(201).json({message: 'created', id: response.insertId});
        console.log(response);          
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
}

const actualizarUsuario = async(req, res) =>{
    const {nombres,apellidos,email,contra,grado,edad,idusuario} = req.body;

    try{
        const response = await executeQuery(`UPDATE usuariobe SET nombres = '${nombres}', apellidos = '${apellidos}', 
        email = '${email}', contra = '${contra}', grado = '${grado}', edad = '${edad}' WHERE idusuario= ${req.params.id}`);

        // res.status(201).json({message: response.affectedRows > 0 ? 'updated' :`No existe  registro con id: ${req.params.id}` });
        console.log(response);    
        if(response.affectedRows >0){
            res.json({message: 'updated'});
        }else  {res.status(404).json({message: `No existe  registro con id: ${req.params.id}` });}
        
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }}

const eliminarUsuario = async(req, res) =>{
    try{
        const response = await executeQuery(`DELETE FROM usuariobe WHERE idusuario= ${req.params.id}`);
        console.log(response);    
        if(response.affectedRows >0){
            res.json({message: 'deleted'});
        }else  {res.status(404).json({message: `No existe  registro con id: ${req.params.id}` });}
        
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
}

export {listar, usuario, Registrar, actualizarUsuario, eliminarUsuario }