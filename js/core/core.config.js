import connectDB from "./core.db.js";
import express from 'express'
import appRouter from "./core.routing.js";
import appMiddlewares from "./core.middleware.js";
import { PORT } from "./core.secrets.js";
import AppLogger from "./core.logs.js";


const app = express();

export function runAppConfig(){
    // connectDB().then((db)=>console.log(db.message))

    //configuration for setting up core middleware from the core.middleware.js folder
    appMiddlewares.forEach(middleware=>{
        app.use(middleware)
    })

    app.use(express.static("public"))
    app.use(express.json())

    //setup routes from registered routes from the core.routing.js
    app.use(appRouter)

    app.startServer = ()=>{
        app.listen(PORT || 5501,()=>{
            AppLogger.logDebug("init", `Server Started and runinng at http://localhost:${PORT || 5501}/`);
        })
    }

    return app
}