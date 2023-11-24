import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Producto, ProductoI } from '../models/Producto';

export class ProductoController {

    public async getAllProducto(req: Request,
     res: Response) {
        try {
            const producto: ProductoI[] = await Producto.findAll(
             ) // select * from producto
            res.status(200).json({ producto })
        } catch (error) {

        }
    }

    public async getOneProducto(req: Request, res: Response) {
        try {
            let producto: ProductoI | any;
            producto = await Producto.findOne(
                {

                    where: {
                        id: req.params.id
                    }
                }

            ) // select * from productos;
            res.status(200).json({ producto })
        } catch (error) {

        }
    }

    public async createProducto(req: Request, res: Response) {
        try {

            const producto = await Producto.create(req.body)
            res.status(200).json(producto)

        } catch (error) {
            console.error(error)
        }
    }

    public async updateProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeProducto = await Producto.findByPk(id)

            if (!existeProducto) {
                res.status(500).json({ msg: 'Producto no encontrado' })
            }

            await Producto.update(actualizarDatos, {
                where: { id }

            })

            const productoActualizada = await Producto.findByPk(id);
            res.status(200).json(productoActualizada);


        } catch (error) {
            console.error(error)
        }
    }
public async deleteProducto(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeProducto = await Producto.findByPk(id)

            if (!existeProducto) {
                res.status(500).json({ msg: 'Producto no encontrado' })
            }

            await Producto.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Producto eliminado' });

        } catch (error) {
            console.error(error)
        }
    }
}