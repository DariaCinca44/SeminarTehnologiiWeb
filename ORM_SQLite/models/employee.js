const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
           type: DataTypes.STRING,
           validate: {
            len: {
                args: [3,10],
                msg: "The first name should have between 3 and 10 characters!"
            }
           }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            validate: {
                isEmail:true
            },
        },
        birthYear: {
                type: DataTypes.INTEGER,
                validate:{
                    min: 1900
                }
        },
        salary : {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min:0
            }
        },
    },
    {tableName: "Employees"}
)

module.exports = Employee;