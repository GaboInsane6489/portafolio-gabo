const express = require("express");
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

console.log("🛠️ process.env.PORT:", process.env.PORT);
console.log("🧪 Valor numérico real del puerto:", PORT);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/test", (req, res) => {
    res.status(200).send("✅ Puerto activo y respondiendo desde /test");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor escuchando en puerto: ${PORT}`);
});