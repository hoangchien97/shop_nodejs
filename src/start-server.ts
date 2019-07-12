import app from "./app";
import { initDatabaseModels } from "./setup/database";


export async function start() {
    await migrateModels();
    return Promise.all([startServer()]);
}


async function startServer() {
    return app.listen(app.get("port"), () => {
        console.log("  App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
        console.log("  Press CTRL-C to stop\n");
      });
}

async function migrateModels() {
    return initDatabaseModels();
}