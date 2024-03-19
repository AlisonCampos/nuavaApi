import {Router} from 'express'
import {usuariocontroller} from '../controllers/index.controller.js'

const router = Router()

router.get ('/usuario', usuariocontroller);

export default router
