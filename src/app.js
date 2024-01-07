const express = require("express");
const app = express();
const PUERTO = 8080;
const path = require("path");

const usersRouter = require("./routes/users.router");
const petsRouter = require("./routes/pets.router");

app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);

//app.use(express.static("public"));
//app.use("/static", express.static("public"));
//app.use("/static", express.static(__diranme + "/public"));
app.use("/static", express.static(path.join(__dirname, "..", "public")));


app.listen(PUERTO, () => {
    console.log(`Listening in http://localhost:${PUERTO}`);
});