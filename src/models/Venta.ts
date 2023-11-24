import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
    public fechaVenta!: string;
    public subtotal!: number;
    public ciudadExp!: string;
    public impuestos!: number;
    public descuentos!: number;
    public total!: number;
    public ClienteId!: number;
}



export interface VentaI {
    fechaVenta: string;
    subtotal: number;
    ciudadExp: String;
    impuestos: number;
    descuentos: number;
    total: number;
    ClienteId: number;
}



Venta.init(
    {
        fechaVenta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        ciudadExp: {
            type: DataTypes.STRING,
            allowNull: false
        },
        impuestos: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        descuentos: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },


    },
    {
        tableName: "ventas",
        sequelize: database,
        timestamps: false
    }
);
Cliente.hasMany(Venta)
Venta.belongsTo(Cliente)