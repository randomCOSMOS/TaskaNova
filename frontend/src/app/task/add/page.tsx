"use client";

import { AppDispatch, RootState } from "@/store/store";
import { addTask } from "@/store/taskSlice";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./page.css"
import { useRouter } from "next/navigation";

export default function add(){
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        if(typeof window != "undefined"){
          setOrigin(window.location.origin)
        }
      })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted!");
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string;
        dispatch(addTask({title, description, status}));
        router.push(origin);
    }

    return(
        <div className="form-container">
        <h1>Adding Task</h1>

        <form onSubmit={handleSubmit}>
        <div className="top-input">
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" className="input-title" required/>
            </div>

            <div>
                <label htmlFor="status">Status:</label>
                <select name="status" id="status" className="input-status" required>
                    <option value="pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
        </div>

        <label htmlFor="description" className="label-description">Description:</label>
        <textarea name="description" className="input-description" id="description" required/>
        <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
    )
}