import {pool} from '../db.js'

export const getUsuarios =  async(req,res) => {
 const [rows] = await pool.query('SELECT * FROM UsuUsuario')
 res.json(rows)
}

export const getUsuario = async (req, res) => {
  const [rows] = await pool.query ('SELECT * FROM UsuUsuario WHERE  id = ?', [req.params.id])
  if (rows.length <= 0 ) return res.status(404).json({
    mesagge: 'Usuario not found'
  })
  res.json(rows[0])
}
//res.send('obteniendo Usuario')

export const createUsuarios =  async(req,res) => {
 const{NombreUsuario, Contrasena, idUsuCatEstado, idUsuCatTipoUsuario} = req.body
 const [rows] = await pool.query('INSERT INTO UsuUsuario (NombreUsuario,Contrasena,idUsuCatEstado, idUsuCatTipoUsuario) VALUES (NombreUsuario,Contrasena,idUsuCatEstado, idUsuCatTipoUsuario)', [NombreUsuario, Contrasena, idUsuCatEstado, idUsuCatTipoUsuario])

  res.send({
    id:rows.insertId,
    NombreUsuario,
    Contrasena,
    idUsuCatEstado,
    idUsuCatTipoUsuario,
  })
}

export const deleteUsuarios = async (req,res) => {
 const [result]= await pool.query('DELETE FROM UsuUsuario WHERE id=?', [req.params.id])
 //console.log(result)
 if (result.affectedRows <= 0) return res.status(404).json({
  mesagge: 'usuario not found'
 })
 res.sendStatus(204)

}

export const updateUsuarios = (req,res) => {
 const{id}  = req.params
 const {NombreUsuario, Contrasena} = req.body
 console.log (id,NombreUsuario, Contrasena)
 res.json('recevid')
}