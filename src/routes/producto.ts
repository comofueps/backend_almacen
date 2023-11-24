import { Request, Response, Application, Router } from "express";

import { ProductoController } from '../controllers/Producto.controller';

export class ProductoRoutes {
    public productosController: ProductoController = new ProductoController();

    public routes(app: Application): void {
     
        app.route("/productos").get(this.productosController.getAllProducto)
        app.route("/productos/:id").get(this.productosController.getOneProducto)
        app.route("/productos").post(this.productosController.createProducto)
        app.route("/productos/:id").put(this.productosController.updateProducto);
        app.route("/productos/:id").delete(this.productosController.deleteProducto);
    }
}