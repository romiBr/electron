document.getElementById("btn").addEventListener('click', () => {
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: null,
        database: "consultorio"

    });

    connection.connect((err) => {
        if (err) {
            return console.log(err.stack);
        }
        console.log("Conexión realizada.");
    })

    let consulta = 'SELECT pacientes.Nombre, obrassociales.nombreObraSocial from pacientes inner join obrassociales on pacientes.obraSocialId = obrassociales.idObraSocial;'
    connection.query(consulta, function (err, rows, fields) {
        if (err) {
            return console.log(err.stack);
        }
        let fila1 = rows[0];
        let fila2 = rows[1];
        let fila3 = rows[2];
        $('.stats').append('<p>Nombre: ' + fila1.Nombre+'</p>');
        $('.stats').append('<p>Obra Social: ' + fila1.nombreObraSocial+'</p>');
        $('.stats').append('<p>Nombre: ' + fila2.Nombre + '</p>');
        $('.stats').append('<p>Obra Social: ' + fila2.nombreObraSocial + '</p>');
        $('.stats').append('<p>Nombre: ' + fila3.Nombre + '</p>');
        $('.stats').append('<p>Obra Social: ' + fila3.nombreObraSocial + '</p>');
    });

    connection.end(() => {
        console.log("Conexión finalizada.");
    })

}, false);