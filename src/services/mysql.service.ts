import mysql from 'mysql2';
import config from '../config/config';

const getConnection =() =>{
    //crea la conexion
    const connection =mysql.createConnection({//Configura la conexion
        database: config.DATABASE,
        user: config.DB_USER,
        password: config.DB_PASSWORD,
        host: config.DB_HOST,
        port: +config.DB_PORT//Es necesario el + para que tranaseforme el string a num
    });

    connection.connect((error)=>{//Conecta con la bbdd
        if(error){
            throw error;
        }else{
            console.log('conexion exitosa');
        }
    });

    return connection;
}

const executeQuery =(query: string)  =>{//Ejecuta el query
    return new Promise<any>((resolve, reject) =>{
        try{
            const connection = getConnection();//Trata de realizar la conexion
            connection.query(query,(error,result)=>{
                if(error){//Maneja el error
                    reject(error);
                }else {resolve(result);//Resuelve la promesa
                } });
            connection.end();
        }catch(error){
            console.log(error);
            reject(error);
        }
    });
}

export default executeQuery;