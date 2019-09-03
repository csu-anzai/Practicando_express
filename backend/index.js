const express=require('express');
const app=express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hola express...');
});

app.post('/signup',(req,res)=>{

    res.send(req.headers);
    console.log(req.body);
});

app.listen(3000,()=>{
    console.log('Servidor en el puerto 3000....');
});