// Write your solution in this file!

let employee ={
    streetname:'',
    name:''

}
function updateEmployeeWithKeyAndValue(employee, key, value){
    
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]=value
return employee
}

function deleteFromEmployeeByKey(employee, key){
    const newOject= {...employee, ...key};
    delete newOject[key]
 return newOject;   
}
 
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
delete employee[key]
return employee
}