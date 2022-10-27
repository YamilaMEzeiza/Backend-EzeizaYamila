const fs = require('fs')

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
nuevoNombre.save({
        tittle: "Sahumerios",
        price: 200,
        thumbnail: "sahumerios.jpg",
    }/* ,
      {
            tittle: "Velas",
            price: 300,
            thumbnail: "velas.jpg",
        },
        {
            tittle: "Barajas tarot",
            price: 2000,
            thumbnail: "barajas.jpg",
        } */).then(resolve=> {console.log(resolve)})
// nuevoNombre.getById(3).then(resolve=> {console.log(resolve)})
nuevoNombre.getAll().then(resolve=> {console.log(resolve)})

   //nuevoNombre.deleteById(2)
   //nuevoNombre.deleteAll()

