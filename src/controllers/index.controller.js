import {pool} from '../db.js'

export const usuariocontroller =async (req,res) =>{     //nombreUsuario es  el campo de la tabla
    const [result] = await pool.query('SELECT * FROM UsuUsuario WHERE NombreUsuario = ?', [req.body.nombre]);
     if(result.length <= 0){
       res.json({"Mensaje":"No hay usuario"});
       return;
     }
     res.json(result)
 }