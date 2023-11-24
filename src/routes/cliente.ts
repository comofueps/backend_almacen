import { Request, Response, Application, Router } from "express";

import { ClienteController } from '../controllers/Cliente.controller';

export class ClienteRoutes {
    public clientesController: ClienteController =  new ClienteController();

    public routes(app: Application): void {
        app.route("/clientes").get(this.clientesController.getAllCliente)
        app.route("/clientes/:id").get(this.clientesController.getOneCliente)
        app.route("/clientes").post(this.clientesController.createCliente)
        app.route("/clientes/:id").patch(this.clientesController.updateCliente);
        app.route("/clientes/:id").delete(this.clientesController.deleteCliente);
    }

}
