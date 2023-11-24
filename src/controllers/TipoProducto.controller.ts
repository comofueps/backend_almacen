import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { TipoProducto, TipoProductoI } from '../models/TipoProducto';

export class TipoProductoController {

    public async getAllTipoproducto(req: Request,
     res: Response) {
        try {
            const tipoproducto: TipoProductoI[] = await TipoProducto.findAll(
             ) // select * from producto
            res.status(200).json({tipoproducto })
        } catch (error) {

        }
    }

    public async getOneTipoProducto(req: Request, res: Response) {
        try {
            let tipoProducto: TipoProductoI | any;
            tipoProducto = await TipoProducto.findOne(
                {

                    where: {
                        id: req.params.id
                    }
                }

            ) // select * from tipoProductos;
            res.status(200).json({ tipoProducto })
        } catch (error) {

        }
    }

    public async createTipoProducto(req: Request, res: Response) {
        try {

            const tipoProducto = await TipoProducto.create(req.body)
            res.status(200).json(tipoProducto)

        } catch (error) {
            console.error(error)
        }
    }

    public async updateTipoProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeTipoProducto = await TipoProducto.findByPk(id)

            if (!existeTipoProducto) {
                res.status(500).json({ msg: 'TipoProducto no encontrada' })
            }

            await TipoProducto.update(actualizarDatos, {
                where: { id }

            })

            const tipoProductoActualizada = await TipoProducto.findByPk(id);
            res.status(200).json(tipoProductoActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteTipoProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeTipoProducto = await TipoProducto.findByPk(id)

            if (!existeTipoProducto) {
                res.status(500).json({ msg: 'TipoProducto no encontrada' })
            }

            await TipoProducto.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'TipoProducto eliminada' });

        } catch (error) {
            console.error(error)
        }
    }
}