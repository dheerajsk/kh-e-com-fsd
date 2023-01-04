
const repo = require("../repositories/employeeRepository");

const employees=[];

// localhost:4200/api/Employee - POST
module.exports.createEmployee = (req, res)=>{
    // read employee data from request object.
    console.log("Creating employee..");
    let employee = req.body;
    repo.add(employee, (err, msg)=>{
        if(!err){
            return res.status(200).send(msg);
        }else{
            return res.status(400).send(err);
        }
    });
   
}

module.exports.getEmployee = (req, res)=>{
    repo.getAll((docs)=>{
        return res.status(200).send(docs);
    })
}

module.exports.getEmployeeById = (req, res)=>{
    const id = req.params.id;
    console.log(id)
    repo.getById(id, (docs)=>{
        if(!docs || docs.length<1){
            return res.status(404).send("No such employee");
        }
        return res.status(200).send(docs);
    })
    
}

module.exports.updateEmployee = (req, res)=> {
    const employee = req.body;
    const index = employees.findIndex(e=> e.id==employee.id);
    if(index<0){
        return res.status(400).send("Invalid employee");
    }else{
        employees[index]=employee;
    }
    return res.status(200).send("Employee updated");
}

module.exports.deleteEmployee = (req, res)=>{
    const id = req.params.id;
    const index = employees.findIndex(e=> e.id==id);
    if(index<0){
        return res.status(404).send("Invalid employee");
    }else{
        employees.splice(index, 1);
    }
    return res.status(200).send("Employee deleted");
}