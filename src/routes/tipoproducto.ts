import { Request, Response, Application, Router } from "express";
import { TipoProductoController } from "../controllers/TipoProducto.controller";



export class TipoProductoRoutes {
    public tipoProductosController: TipoProductoController = new TipoProductoController();

    public routes(app: Application): void {
     
        app.route("/tipoproductos").get(this.tipoProductosController.getAllTipoproducto)
        app.route("/tipoproductos/:id").get(this.tipoProductosController.getOneTipoProducto)
        app.route("/tipoproductos").post(this.tipoProductosController.createTipoProducto)
        app.route("/tipoproductos/:id").put(this.tipoProductosController.updateTipoProducto);
        app.route("/tipoproductos/:id").delete(this.tipoProductosController.deleteTipoProducto);
    }
}