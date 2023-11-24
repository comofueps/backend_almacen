import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Venta } from "./Venta";
import { ProductoVenta } from "./ProductoVenta";

export class Producto extends Model {
    public nombre!: string;
    public marca!: string;
    public precio!: number;
    public stockMin!: number;
    public cantidad!: number;
    public TipoProductoId!: number;
}



export interface ProductoI {
    nombre: string;
    marca: string;
    precio: number;
    stockMin: number;
    cantidad: number;
    TipoProductoId: number;
}



Producto.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stockMin: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

    },
    {
        tableName: "productos",
        sequelize: database,
        timestamps: false
    }
);
Producto.belongsToMany(Venta,{through: ProductoVenta})
Venta.belongsToMany(Producto,{through:ProductoVenta})