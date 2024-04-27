import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

// const sequelize = new Sequelize("mysql");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        // allowNull: false,
        values: ['male', 'female', 'other']
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: "Nungua"
    },
    literate: {
        type: DataTypes.BOOLEAN
    }
},
// {freezeTableName: true} 
// {tableName: "newTableName"}
{timestamps: true}
);

await User.sync();

console.log("The table for the user model was (re)created");

export default User;