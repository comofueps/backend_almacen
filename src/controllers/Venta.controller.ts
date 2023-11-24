import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/Venta';

export class VentaController {

    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll()
            res.status(200).json({venta})
        } catch (error) {

        }
    }

    public async getOneVenta(req: Request, res: Response) {
        try {
            let venta: VentaI | any;
            venta = await Venta.findOne(
                {

                    where: {
                        id: req.params.id
                    }
                }

            ) // select * from ventas;
            res.status(200).json({ venta })
        } catch (error) {

        }
    }

    public async createVenta(req: Request, res: Response) {
        try {

            const venta = await Venta.create(req.body)
            res.status(200).json(venta)

        } catch (error) {
            console.error(error)
        }
    }

    public async updateVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeVenta = await Venta.findByPk(id)

            if (!existeVenta) {
                res.status(500).json({ msg: 'Venta no encontrada' })
            }

            await Venta.update(actualizarDatos, {
                where: { id }

            })

            const ventaActualizada = await Venta.findByPk(id);
            res.status(200).json(ventaActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeVenta = await Venta.findByPk(id)

            if (!existeVenta) {
                res.status(500).json({ msg: 'Venta no encontrada' })
            }

            await Venta.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Venta eliminada' });

        } catch (error) {
            console.error(error)
        }
    }
}