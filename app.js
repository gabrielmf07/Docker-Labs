const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
database: process.env.MYSQL_DATABASE,
});
db.connect((err) => {
if (err) {
console.error('Error de conexión a la base de datos:', err);
return;
}
console.log('Conexión a la base de datos establecida');
});
app.get('/usuarios', (req, res) => {
db.query('SELECT * FROM users', (err, results) => {
if (err) {
console.error('Error al consultar la base de datos:', err);
res.status(500).send('Error interno del servidor');
return;
}
res.json(results);
});
});
app.listen(3000, () => {
console.log('Servicio web escuchando en el puerto 3000');
});