import express from "express";
import path from "path";
import { start } from "./start-server";
import { NextFunction } from "connect";

start().catch();
const app = express();
// default port to listen
app.set("port", process.env.PORT || 3000);

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );
app.use((err: Error, _req: express.Request, res: express.Response, _next: NextFunction) => {
    console.error(err);
    res.header("Content-Type", "application/json");
    res.status(500).send(JSON.stringify(err, Object.getOwnPropertyNames(err)));
});

export default app;