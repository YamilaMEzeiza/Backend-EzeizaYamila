const fs = require('fs')

class Contenedor {
    constructor(nombreProducto){
        this.nombreProducto=nombreProducto
    }
     async save(producto) {
       
        let productos= []
        try {
            if (fs.existsSync(this.nombreProducto)) {
                let data = await fs.promises.readFile(this.nombreProducto, "utf-8");
                 productos = JSON.parse(data);
                let id = producto.length + 1;
                productos.id = id;
                productos.push(producto);
                await fs.promises.writeFile(this.nombreProducto, JSON.stringify(productos, null, 2))
                return {
                    status: "success",
                    message: "Se creo correctamente el id."
                }
            } else {
                user.id = 1;
                await fs.promises.writeFile(
                    this.nombreProducto,
                    JSON.stringify([producto], null, 2)
                )
            }
            return {
                status: "success",
                message: "Se creo correctamente el id."
            }
        } catch (error) {
            status: "error";
            message: error.message
        }
    }
     async getAll () {
        try {
            if (fs.existsSync(this.nombreProducto)) {
                let data = await fs.promises.readFile(this.nombreProducto, "utf-8");
                const productos = JSON.parse(data);
                return {
                    status: "success",
                    productos: productos
                }
            } else {

                status: "error";
                message: "No se encontró ningun producto"

            }
        } catch (error) {
            status: "error";
            message: error.message
        }
    }
     async getById (id)  {
        if (!id) {
            status: "error";
            message: "No existe ese id"
        } if (fs.existsSync(this.nombreProducto)) {
            let data = await fs.promises.readFile(this.nombreProducto, "utf-8");
            const productos = JSON.parse(data);
            let producto = productos.find((producto) => producto.id == id);
            if (producto) {
                return {
                    status: "success",
                    producto: producto
                }
            }
            else {
                status: "error";
                message: "No se puede encontrar ese producto"
            }
        }
    }

        async deleteById (id) {
            if (!id) {
                status: "error";
                message: "No existe ese id"
            }
            if (fs.existsSync(this.nombreProducto)) {
                let data = await fs.promises.readFile(this.nombreProducto, "utf-8");
                const productos = JSON.parse(data);
                let newProductos= productos.filter((producto)=> producto.id !=id);{
                    await fs.promises.writeFile(
                        this.nombreProducto,
                        JSON.stringify(newProductos,null,2)
                    );
                    return{
                        status:"success",
                        message:"Producto eliminado correctamente",
                    }                }
            }
        }
        deleteAll() {
            fs.writeFileSync(this.nombreProducto, "")
        }

    }
   
   const nuevoNombre= new Contenedor('./productos.txt');
   nuevoNombre.save({
    tittle:"Sahumerios",
    price:200,
    thumbnail:"sahumerios.jpg",
   },
   {
    tittle:"Velas",
    price:300,
    thumbnail:"velas.jpg",
   },
   {
    tittle:"Barajas tarot",
    price:2000,
    thumbnail:"barajas.jpg",
   })
  // nuevoNombre.getById(3)
   nuevoNombre.getAll()
   //nuevoNombre.deleteById(2)
   //nuevoNombre.deleteAll()

