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

const productos = []

productosRouter.get("/", (req, res) => {
    res.json(productos)
})
productosRouter.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let producto = productos.find((producto) => producto.id == id);
    return producto
})
productosRouter.post("/", (req, res) => {
    let producto = req.body;
    if (productos.length != 0) {

        let id = producto.length + 1;
                producto.id = id;
                productos.push(producto);
    } else producto.id = 1;
    productos.push(producto);
    res.json(producto);
})
productosRouter.delete("/:id",(req,res)=>{
    productos.splice(req.params.id - 1,1);
    res.json(productos)
})
app.use("/productos",productosRouter);

 app.use((req,res,next)=>{
    res.sendStatus(404)
}) 
app.use("/api/productos", productosRouter);

app.use('/static', express.static('/public'));






//*Link a glitch:https://miniature-gregarious-salt.glitch.me

/* const fs = require('fs')
const express = require('express')



class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo
    }
    async save(producto) {

        let productos = []
        try {
            let data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
            productos = JSON.parse(data);
            if (productos.length != 0) {

                let id = producto.length + 1;
                producto.id = id;
                productos.push(producto);
                fs.writeFileSync(this.nombreArchivo, JSON.stringify(productos))

            } else {
                producto.id = 0;
                productos.push(producto);
                fs.writeFileSync(this.nombreArchivo, JSON.stringify(productos))
            }

        } catch (error) {
            producto.id = 0;
            productos.push(producto);
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(productos))
        } return producto.id
    }
    async getAll() {
        try {

            let data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
            const productos = JSON.parse(data);
            return productos

        } catch (error) {
            return null
        }
    }
    async getById(id) {
        try {
            let data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
            const productos = JSON.parse(data);
            let producto = productos.find((producto) => producto.id == id);
            return producto
        }
        catch {
            return null
        }

    }




    async deleteById(id) {
        try {
            let data = await fs.promises.readFile(this.nombreArchivo, "utf-8");
            const productos = JSON.parse(data);
            let newProductos = productos.filter((producto) => producto.id != id); 
            fs.writeFileSync(this.nombreArchivo,JSON.stringify(newProductos))
        } catch {
            return null
        }


    }
    deleteAll() {
        fs.writeFileSync(this.nombreArchivo, "")
    }
}


    const nuevoNombre = new Contenedor('./productos.txt');
    

/* nuevoNombre.save({

        tittle: "Sahumerios",
        price: 200,
        thumbnail: "sahumerios.jpg",
    }).then(resolve=> {console.log(resolve)});

     nuevoNombre.save({ 
            tittle: "Velas",
            price: 300,
            thumbnail: "velas.jpg",
        }) .then(resolve=> {console.log(resolve)});
        nuevoNombre.save({  
            tittle: "Barajas tarot",
            price: 2000,
            thumbnail: "barajas.jpg",
        } ).then(resolve=> {console.log(resolve)}) ; */
    
      /*   const app=express()
    const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

server.on("error", error => console.log(`Error en  ${error}`))

app.get('/', (req, res) => {
    res.send("Inicio")
})
app.get('/productos',(req,res)=>{
    
        nuevoNombre.getAll().then(resolve => {
            res.send(`Productos: ${JSON.stringify(resolve)}`)
        });
});
app.get('/productoRandom', (req, res) => {
    let aleatorio = 1 +Math.floor(Math.random() * 3) 
    nuevoNombre.getById(aleatorio).then(resolve => {
        res.end(`El producto random es: ${JSON.stringify(resolve)}`)
    }) *//* ;
}) */
// nuevoNombre.getById(3).then(resolve=> {console.log(resolve)})
//nuevoNombre.getAll().then(resolve=> {console.log(resolve)})

   //nuevoNombre.deleteById(2)
   //nuevoNombre.deleteAll()

 