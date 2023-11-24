import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { ProductoVenta, ProductoVentaI } from '../models/ProductoVenta';

export class ProductoVentaController {

    public async getAllProductoVenta(req: Request, res:Response){
        try {
            const productoVenta: ProductoVentaI[] = await ProductoVenta.findAll()
            res.status(200).json({productoVenta})
        } catch (error) {

        }
    }

    public async getOneProductoVenta(req: Request, res: Response) {
        try {
            let productoVenta: ProductoVentaI | any;
            productoVenta = await ProductoVenta.findOne(
                {

                    where: {
                        id: req.params.id
                    }
                }

            ) // select * from productoVentas;
            res.status(200).json({ productoVenta })
        } catch (error) {

        }
    }

    public async createProductoVenta(req: Request, res: Response) {
        try {

            const productoVenta = await ProductoVenta.create(req.body)
            res.status(200).json(productoVenta)

        } catch (error) {
            console.error(error)
        }
    }

    public async updateProductoVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeProductoVenta = await ProductoVenta.findByPk(id)

            if (!existeProductoVenta) {
                res.status(500).json({ msg: 'ProductoVenta no encontrada' })
            }

            await ProductoVenta.update(actualizarDatos, {
                where: { id }

            })

            const productoVentaActualizada = await ProductoVenta.findByPk(id);
            res.status(200).json(productoVentaActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteProductoVenta(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeProductoVenta = await ProductoVenta.findByPk(id)

            if (!existeProductoVenta) {
                res.status(500).json({ msg: 'ProductoVenta no encontrada' })
            }

            await ProductoVenta.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'ProductoVenta eliminada' });

        } catch (error) {
            console.error(error)
        }
    }
}