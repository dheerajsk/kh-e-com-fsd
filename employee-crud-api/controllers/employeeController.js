
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
    res.status(200).send("Employee created");
}

function getEmployee(){

}

function getEmployeeById(){

}

function updateEmployee(){

}

function deleteEmployee(){

}