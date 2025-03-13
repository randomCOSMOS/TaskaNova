"use client";
import { AppDispatch, RootState } from "@/store/store";
import { getSpecificTasks, updateTasks } from "@/store/taskSlice";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function EditPage({id}: {id: string}){
    const {tasks} = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [title, SetTitle] = useState("");
    const [description, SetDescription] = useState("");
    const [status, SetStatus] = useState("");
    const [origin, SetOrigin] = useState("");

    useEffect(() => {
        dispatch(getSpecificTasks({id}));
    }, [dispatch]);

    useEffect(() => {
        if (tasks.length > 0) {
          const task = tasks[0];
          SetTitle(task.title);
          SetDescription(task.description);
          SetStatus(task.status);
        };
      }, [tasks]);

    useEffect(() => {
    if(typeof window != "undefined"){
        SetOrigin(window.location.origin);
    }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted!");
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string;
        dispatch(updateTasks({id, title, description, status}));
        router.push(origin+'/task/'+id);
    }

    return(
        <div className="form-container">
        <h1>Editing Task</h1>

        <form onSubmit={handleSubmit}>
            <div className="top-input">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" className="input-title" onChange={e => SetTitle(e.target.value)} value={title} required/>
                </div>

                <div>
                    <label htmlFor="status">Status:</label>
                    <select name="status" id="status" className="input-status" onChange={e => SetStatus(e.target.value)} value={status} required>
                        <option value="pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

            <label htmlFor="description" className="label-description">Description:</label>
            <textarea name="description" className="input-description" onChange={e => SetDescription(e.target.value)}  id="description" value={description} required/>
            <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
    )
}