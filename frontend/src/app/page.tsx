"use client";

import { deleteTasks, getTasks } from "@/store/taskSlice";
import "./page.css";
import 'dotenv/config';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if(typeof window != "undefined"){
      setOrigin(window.location.origin)
    }
  })

  const del = (id: any) => {
    const ans = prompt("Enter \"Confirm\" to delete the task:");
    if (ans=="Confirm"){
      dispatch(deleteTasks({id}));
      router.refresh();
    } else {
      alert("Invalid answer!")
    }
  }
  
  const edit = (id: any) => {
    router.push(origin+`/edit/`+id);
  }

  const view = (id: any) => {
    router.push(origin+'/task/'+id);
  }

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="table-container">
        <ul className="table">
          <li className="heading">
            <p>Title</p>
            <p>Description</p>
            <p>Status</p>
            <p>Action</p>
          </li>
          {tasks.map((task: any, index: any) => (
            <li key={index}>
              <p>{task.title}</p>
              <p>{task.description}</p> 
              <p>{task.status}</p>
              <p className="actions">
                <img src="/icon/edit.png" alt="edit" onClick={()=>edit(task._id)}/>
                <img src="/icon/delete.png" alt="delete" onClick={()=>del(task._id)} />
                <img src="/icon/view.png" alt="view" onClick={()=>view(task._id)} />
              </p>
            </li>
          ))}
        </ul>
        <a href={`${origin}/task/add`}><button className="add-task">Add Task</button></a>
      </div>
    </div>
  );
}
