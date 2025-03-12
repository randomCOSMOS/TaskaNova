"use client";
import aDelete from "./crud";

export default function TaskPage({id} : {id : string}){
  const handleClick = () => {
    console.log("The delete button was pressed!");
    aDelete(id);
  }

  return (
    <div>
        <h1>Looking for task: {id}??</h1>
        <button onClick={handleClick}>It tell database to delete stuff</button>
      </div>
    );
}