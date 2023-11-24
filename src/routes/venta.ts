import { Request, Response, Application, Router } from "express";

import { VentaController } from '../controllers/Venta.controller';

export class VentaRoutes {
    public ventasController: VentaController = new VentaController();

    public routes(app: Application): void {
        app.route("/ventas").get(this.ventasController.getAllVenta)
        app.route("/ventas/:id").get(this.ventasController.getOneVenta)
        app.route("/ventas").post(this.ventasController.createVenta)
        app.route("/ventas/:id").put(this.ventasController.updateVenta);
        app.route("/ventas/:id").delete(this.ventasController.deleteVenta);
    }
}
