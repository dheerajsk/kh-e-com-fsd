
const employees=[];

// localhost:4200/api/Employee - POST
module.exports.createEmployee = (req, res)=>{
    // read employee data from request object.
    console.log("Creating employee..");
    let employee = req.body;
    if(!employee.id){
        return res.status(400).send("ID is missing");
    }
    employees.push(employee);
    return res.status(200).send("Employee created");
}

module.exports.getEmployee = (req, res)=>{
    return res.status(200).send(employees);
}

module.exports.getEmployeeById = (req, res)=>{
    const id = req.params.id;
    console.log(id)
    const employee = employees.find(e=> e.id==id);
    if(!employee){
        return res.status(404).send("No such employee");
    }
    return res.status(200).send(employee);
}

function updateEmployee(){

}

function deleteEmployee(){

}