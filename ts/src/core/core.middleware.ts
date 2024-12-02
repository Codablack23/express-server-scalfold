import { NextFunction, Request, Response, } from "express"
import AppLogger from "./core.logs"


const useURL= (req:Request,res:Response,next:NextFunction)=>{
    AppLogger.logDebug(req.method,req.url)
    next()
}

const appMiddlewares = [
    useURL
]

export default appMiddlewares