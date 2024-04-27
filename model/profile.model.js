import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const profile = sequelize.define('Profile', {
    height: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    bio: {
        type: DataTypes.TEXT,
    }
}, {timestamps: false});

// await profile.sync();
// console.log("The Profile model table was just created");

export default profile;