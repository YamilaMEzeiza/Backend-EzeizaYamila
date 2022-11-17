import express from 'express';
import __dirname  from './utils.js';
const app= express();

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const productos=[]
app.get('/',(req,res)=>{
res.render('formulario',{
    productos
})
})

app.post('/productos',(req,res)=>{
    const producto=req.body;
    console.log(producto)
    productos.push(producto)
    res.render('productos',{
        productos
})
    res.redirect('/')
    })
app.get('/productos',(req,res)=>{
    const productos=[
        [{"tittle":"Sahumerios","price":200,"thumbnail":"sahumerios.jpg","id":0},
        {"tittle":"Velas","price":300,"thumbnail":"velas.jpg","id":1},
        {"tittle":"Barajas tarot","price":2000,"thumbnail":"barajas.jpg","id":2}] 
    ]

    res.render('productos',{
        productos
})
})

const server= app.listen(8080,()=>console.log("Listening"))