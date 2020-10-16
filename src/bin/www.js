import app from "../app";
import socketIO from "../helpers/socketIO";

// const server = http.createServer(app);

// const port = process.env.PORT || "7000";

// app.set("port", port);

// app.get("/", function (request, response) {
//     var result = "App is running";
//     response.send(result);
// }).listen(app.get("port"), function () {
//     console.log("App is running, server is listening on port ", app.get("port"));
// });

// server.listen(port, () => {
//     console.log(`server running on port ${port}`);
// });
// server.on("error", onError);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

// const port = normalizePort();
// app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = app.listen(process.env.PORT || "7000", () => {
    process.stdout.write(`Server is running on port: ${process.env.PORT}\n`);
});

socketIO(server);

app.server.on("error", onError);
