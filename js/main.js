import { runAppConfig } from "./core/core.config.js";

async function main(){
    const app = runAppConfig()
    app.startServer()
}

main()
.then(() => console.log())
.catch((err) => { throw err });