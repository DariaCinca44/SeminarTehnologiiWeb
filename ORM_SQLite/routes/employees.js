const Employee = require("../models/employee");
const {Op} = require("sequelize");
const router=require("express").Router();

router
    .route("/employees")
    .get(async (req,res)=>{
        try{
            const {simplified, sortBy} = req.query;
            const employees= await Employee.findAll({
                attributes: simplified ? {exclude : 'id'} : undefined,
                order: sortBy ? [[sortBy, 'DESC']] : undefined
        });
            return res.status(200).json(employees);
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    })
    .post(async (req, res)=>{
        try{
            const newEmployee= await Employee.create(req.body);
            return res.status(200).json(newEmployee);
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    })

router
    .route("/employees/:id")
    .get(async (req,res)=>{
        try{
            const employee= await Employee.findByPk(req.params.id);
            if(employee){
                return res.status(200).json(employee);
            } else return res.status(404).json({error: `Employee with id ${req.params.id} not found`});
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    })
    .put(async (req, res)=>{
        try{
            const employee= await Employee.findByPk(req.params.id);
            if(employee){
                const updateEmployee= await employee.update(req.body);
                return res.status(200).json(updateEmployee);
            } else return res.status(404).json({error: `Employee with id ${req.params.id} not found`});
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    })
    .delete(async (req,res)=>{
        try{
            const employee= await Employee.findByPk(req.params.id);
            if(employee){
                await employee.destroy();
                return res.status(200).json({message: 'Employee deleted'});
            } else return res.status(404).json({error: `Employee with id ${req.params.id} not found`});
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    })

module.exports = router;