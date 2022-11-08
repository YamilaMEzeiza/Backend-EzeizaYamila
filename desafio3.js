const express = require('express');
const app=express();

const { Router } = express;
const productosRouter = new Router();

app.use("/static", express.static(__dirname + "public"))
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

server.on("error", error => console.log(`Error en  ${error}`))
productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))



const productos = []

productosRouter.get("/", (req, res) => {
    res.json(productos)
})
productosRouter.delete("/:id",(req,res)=>{
    productos.splice(req.params.id - 1,1);
    res.json(productos)
})
app.use("/productos",productosRouter);

app.use((req,res,next)=>{
    res.sendStatus(404)
})
