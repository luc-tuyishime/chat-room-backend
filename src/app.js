import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import chatRoomRouter from "./routes/ChatRoom";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

app.use("/chatroom", chatRoomRouter);

// when a random route is inputed
app.get("*", (req, res) =>
    res.status(200).send({
        message: "Welcome to the CHAT"
    })
);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err.status
    });
    next();
});

export default app;
