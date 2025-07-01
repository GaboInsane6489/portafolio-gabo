const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Ruta raíz explícita para asegurar compatibilidad con Render
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Ruta de prueba opcional para confirmar respuesta del servidor
app.get("/test", (req, res) => {
    res.status(200).send("✅ Puerto activo y respondiendo desde /test");
});

// Escuchar en el puerto asignado, accesible externamente
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor escuchando en puerto: ${PORT}`);
});