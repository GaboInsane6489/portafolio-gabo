const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Servidor iniciado en http://localhost:${PORT}`);
});