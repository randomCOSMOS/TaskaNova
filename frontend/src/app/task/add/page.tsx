"use client";

import { AppDispatch, RootState } from "@/store/store";
import { addTask } from "@/store/taskSlice";
import { FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function add(){
    const tasks = useSelector((state: RootState) => state.tasks);
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted!");
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const status = formData.get('status') as string;
        dispatch(addTask({title, description, status}));
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title" />
            <br />
            <label htmlFor="description">Description:</label>
            <input type="description" name="description" id="description" />
            <br />
            <label htmlFor="status">Status:</label>
            <input type="status" name="status" id="status" />
            <button type="submit">Submit</button>
        </form>
    )
}