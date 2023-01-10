
const repo = require("../repositories/employeeRepository");

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


module.exports.getBySalary = (req, res)=>{
    repo.getEmployeesBySalary(50000,(docs)=>{
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
    repo.update(employee, ()=>{
        return res.status(200).send("Employee updated");
    });
   
}

module.exports.deleteEmployee = (req, res)=>{
    const id = req.params.id;
    repo.delete(id, (err)=>{
        if(err){
            return res.status(400).send("No such employee");
        }
        return res.status(200).send("Employee deleted");
    });
}

module.exports.getITEmployees = (req, res)=>{
    repo.getEmployeesWithLogicalOperartions((docs)=>{
        return res.status(200).send(docs);
    })
}

module.exports.lazyLoad = (req, res)=>{
    const page = req.params.page;
    repo.lazyLoad(page, (docs)=>{
        return res.status(200).send(docs);
    })
}