"use client";

import { getTasks } from "@/store/taskSlice";
import styles from "./page.module.css";
import 'dotenv/config';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";

export default function Home() {
  const { tasks, loading, error } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if(typeof window != "undefined"){
      setOrigin(window.location.origin)
    }
  })

  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className={styles.cent}>Sup Balls</p>
      {tasks.map((task: any, index: any) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description} ({task.status})
            <button><a href={`${origin}/task/${task._id}`}>Visit!</a></button>
          </li>
        ))}
        <button><a href={`${origin}/task/add`}>Add BALLS!</a></button>
    </div>
  );
}
