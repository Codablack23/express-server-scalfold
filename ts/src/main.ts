import { runAppConfig } from "@core/core.config";

async function main(){
    const {startServer} = runAppConfig()
    startServer()
}

main()
.then(() => console.log())
.catch((err) => { throw err });