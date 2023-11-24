import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductoVenta extends Model {
    public VentaId!: number;
    public ProductoId!: number;
    public cantidad!: number;
    public valor_unitario!: number;
}



export interface ProductoVentaI {
    VentaId: number;
    ProductoId: number;
    cantidad: number;
    valor_unitario: number;
}



ProductoVenta.init(
    {
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor_unitario: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        

    },
    {
        tableName: "producto_ventas",
        sequelize: database,
        timestamps: false
    }
);