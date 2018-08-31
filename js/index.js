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

        for(var i in rows)
        {
            let fila = rows[i];
            $('.stats').append('<p>Nombre: '+fila.Nombre+'</p>');
            $('.stats').append('<p>Obra Social: '+fila.nombreObraSocial+'<br>');
        }       
        
    });

    connection.end(() => {
        console.log("Conexión finalizada.");
    })

}, false);