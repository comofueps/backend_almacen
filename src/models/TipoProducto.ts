import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";

export class TipoProducto extends Model {
    public nombre!: string;
}



export interface TipoProductoI {
    nombre: string;
}



TipoProducto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

    },
    {
        tableName: "tipo_productos",
        sequelize: database,
        timestamps: false
    }
);

TipoProducto.hasMany(Producto)
Producto.belongsTo(TipoProducto)