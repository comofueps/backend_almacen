import { Model, DataTypes, EnumDataType } from "sequelize";
import { database } from "../database/db";
import { EnumType } from "typescript";

export class Cliente extends Model {
  public nombre!: string;
  public direccion!: string;
  public telefono!: string;
  public correo!: string;
  public password!: string;
  public estado!:EnumType;

}

export interface ClienteI {
    nombre: string;
    direccion: string;
    telefono: string;
    correo: string;
    password: string;
    estado: EnumType;
}

Cliente.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      },

      estado: {
        type: DataTypes.ENUM('Activo','Inactivo'),
        allowNull: false
      } 
  },
  {
    tableName: "clientes",
    sequelize: database,
    timestamps: false
  }
);