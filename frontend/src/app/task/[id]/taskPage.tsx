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
    dispatch(deleteTasks({id}));
    router.push(origin);
  }

  return (
    <div>
        <h1>Looking for task: {id}??</h1>

        {tasks.map((task: any, index:any) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description} ({task.status})
          </li>
        ))}
        <button>Edit</button>
        <button onClick={del}>Delete</button>
        <br />
        <a href={origin}>Home!</a>
      </div>
    );
}