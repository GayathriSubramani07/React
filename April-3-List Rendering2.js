import React from "react"
function NameList()
{
    const employees = [
        { id: 1, name: "Gayathri", role: "Developer" },
        { id: 2, name: "John", role: "Designer" },
        { id: 3, name: "Alice", role: "Manager" }
      ];
    
    const employee=employees.map(emp =>(<h2> I am {emp.name}. My role is {emp.role} </h2>))
    return(
        <div>{employee}</div>
            
       
    
            
    )
}
export default NameList
