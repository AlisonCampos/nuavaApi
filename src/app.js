import express from 'express'
import usuariosRoutes from './routes/usuarios.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()


app.use(express.json())

app.use(indexRoutes)
app.use('/api',usuariosRoutes)

export default app;