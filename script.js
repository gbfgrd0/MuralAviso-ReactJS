const PORTA = 3000;
const express = require("express");
const app = express();
const ApiRota = require("./api")
const path = require("path");

app.use("/api", ApiRota)
app.use("/", express.static(path.join(__dirname, "public")))

app.listen(PORTA, ()=>{
    console.log("O servidor está rodando na porta:", PORTA)
});
