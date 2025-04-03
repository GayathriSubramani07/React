import React from "react"
function NameList()
{
    const name=["Bruce","Clark","Diana"]
    const nameList=name.map(names => <h2>{names}</h2>)
    return(
        <div>{nameList}</div>
            
       
    
            
    )
}
export default NameList
