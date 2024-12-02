import {Router} from 'express'
import productRouter from '../app/products/route.js'

const appRouter = Router()

appRouter.use("/",productRouter)

export default appRouter

