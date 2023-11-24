import { Request, Response, Application, Router } from "express";

import { ProductoVentaController } from '../controllers/ProductoVenta.controller'

export class ProductoVentaRoutes {
    public productoVentasController: ProductoVentaController = new ProductoVentaController();

    public routes(app: Application): void {
        app.route("/productoventas").get(this.productoVentasController.getAllProductoVenta)
        app.route("/productoventas/:id").get(this.productoVentasController.getAllProductoVenta)
        app.route("/productoventas").post(this.productoVentasController.createProductoVenta)
        app.route("/productoventas/:id").put(this.productoVentasController.updateProductoVenta);
        app.route("/productoventas/:id").delete(this.productoVentasController.deleteProductoVenta);
    }
}
