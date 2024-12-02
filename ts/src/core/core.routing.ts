import {Router} from 'express'
import productRouter from '../app/products/route'

const appRouter = Router()

appRouter.use("/",productRouter)

export default appRouter

