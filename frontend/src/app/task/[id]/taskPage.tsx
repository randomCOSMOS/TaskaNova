"use client";

import { AppDispatch, RootState } from "@/store/store";
import { deleteTasks, getSpecificTasks } from "@/store/taskSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TaskPage({id} : {id : string}){
  const {tasks} = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [origin, setOrigin] = useState("");

  useEffect(()=>{
    dispatch(getSpecificTasks({id}));
  }, [dispatch]);

  useEffect(() => {
    if(typeof window != "undefined"){
      setOrigin(window.location.origin)
    }
  });

  const del = () => {
    const ans = prompt("Enter \"Confirm\" to delete the task:");
    if (ans=="Confirm"){
      dispatch(deleteTasks({id}));
      router.push(origin);
    } else {
      alert("Invalid answer!")
    }
  }

  const edit = () => {
    router.push(origin+`/edit/`+id);
  }

  return (
    <div className="task-list">
  {tasks.map((task: any, index: any) => (
    <div key={index} className="task-item">
      <div className="task-header">
        <strong className="task-title">{task.title}</strong>
        <span className="task-status">({task.status})</span>
      </div>
      <p className="task-description">{task.description}</p>
      <div className="task-actions">
        <button className="edit-btn" onClick={edit}>Edit</button>
        <button className="delete-btn" onClick={del}>Delete</button>
      </div>
    </div>
  ))}
</div>
    );
}