var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sugerencia =[

];

var currentId = 1;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send({sugerencia: sugerencia});
});

app.post('/',function(req,res){
    let nom = req.body.nombre;
    let app = req.body.apellido;
    //let d = req.body.dui;
    //let n = req.body.nit;
    let cor = req.body.correo;
    let tel = req.body.telefono;
    //let sug = req.body.sugerencia;

    currentId ++;

    sugerencia.push({
        id: currentId,
        nombre: nom,
        apellido: app,
        //dui:d,
        //nit:n,
        correo: cor,
        telefono: tel,
        //sugerencia: sug
    });

    res.send('Sugerencias Actualizadas');

});

app.delete('/',function(req,res){
    let nom = req.body.nombre;
    let app = req.body.apellido;
    /*let d = req.body.dui;
    let n = req.body.nit;*/
    let cor = req.body.correo;
    let tel = req.body.telefono;
   // let sug = req.body.sugerencia;

    currentId --;

    sugerencia.delete({
        id: currentId,
        nombre: nom,
        apellido: app,
        /*dui:d,
        nit:n,*/
        correo: cor,
        telefono: tel,
        //sugerencia: sug
    });

    res.send('Sugerencias Actualizadas');
});

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});

