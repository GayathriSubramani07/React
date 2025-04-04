import React from "react";
import Person from "./Person";

function NameList() {
  const names=['Gayathri' ,'John','Alice','Alice']
 
  const nameList = names.map((name,index) => <h2 key={index}>{name}</h2>);

  return <div>{nameList}</div>; 
}

export default NameList;
