import { Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ClienteI } from '../models/Cliente';

export class ClienteController {


    public async getAllCliente(req: Request, res: Response) {
        try {
            const cliente: ClienteI[] = await Cliente.findAll(
                {
                    where: { estado: 'Activo' }
                }

            ) // select * from clientes;
            res.status(200).json({ cliente })
        } catch (error) {

        }
    }

    public async getOneCliente(req: Request, res: Response) {
        try {
            let cliente: ClienteI | any;
            cliente = await Cliente.findOne(
                {

                    where: {
                        estado: 'Activo',
                        id: req.params.id

                    }
                }

            ) // select * from clientes;
            res.status(200).json({ cliente })
        } catch (error) {

        }
    }

    public async createCliente(req: Request, res: Response) {

        try {
            const cliente = await Cliente.create(req.body)
            res.status(200).json({ cliente })
        } catch (error) {

        }
    }

    public async updateCliente(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const actualizarDatos = req.body;

            const existeCliente = await Cliente.findByPk(id)

            if (!existeCliente) {
                res.status(500).json({ msg: 'Cliente no encontrado' })
            }

            await Cliente.update(actualizarDatos, {
                where: { id }

            })

            const clienteActualizada = await Cliente.findByPk(id);
            res.status(200).json(clienteActualizada);


        } catch (error) {
            console.error(error)
        }
    }
    public async deleteCliente(req: Request, res: Response) {
        try {
            const id = req.params.id;

            const existeCliente = await Cliente.findByPk(id)

            if (!existeCliente) {
                res.status(500).json({ msg: 'Cliente no encontrado' })
            }

            await Cliente.destroy(
                {
                    where: { id }
                }
            )

            res.status(200).json({ msg: 'Cliente eliminado' });

        } catch (error) {
            console.error(error)
        }
    }

    public async deleteCliente_Tipo2(req: Request, res: Response) {

    }

}
