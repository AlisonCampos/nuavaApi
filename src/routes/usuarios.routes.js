import { Router } from 'express';
import { createUsuarios, deleteUsuarios, getUsuarios, updateUsuarios, getUsuario } from '../controllers/usuarios.controller.js';

const router = Router()

router.get('/usuarios', getUsuarios)

router.get('/usuarios/:id', getUsuarios)

router.post('/usuarios', createUsuarios)

router.put('/usuarios/:id', updateUsuarios)

router.delete('/usuarios/:id', deleteUsuarios)


export default  router 