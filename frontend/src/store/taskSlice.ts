import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

// get all tasks
export const getTasks = createAsyncThunk<Task[]>("tasks/getTasks", async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API);
  return res.data.data;
});

// get one task
export const getSpecificTasks = createAsyncThunk<Task, {id:string}>("tasks/getSpecificTasks", async ({id}) => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API + id);
  console.log(res.data)
  return res.data.data;
})

//Add Task
export const addTask = createAsyncThunk<Task, { title: string; description: string; status: string }>("tasks/addTask", async ({title, description, status}) => {
  const res = await axios.post(process.env.NEXT_PUBLIC_API, {title, description, status});
  console.log(res.data);
  return res.data;
})

// update task
export const updateTasks = createAsyncThunk<Task, { id: string; title: string; description: string; status: string }>("tasks/updateTasks", async ({id, title, description, status}) => {
  const res = await axios.put(process.env.NEXT_PUBLIC_API +  id, {title, description, status});
  console.log(res.data);
  return res.data;
})

// delete a task
export const deleteTasks = createAsyncThunk<Task, {id: string}>("tasks/deleteTasks", async ({id}) => {
  const res = await axios.delete(process.env.NEXT_PUBLIC_API+id);
  console.log(res.data)
  return res.data;
})

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getTasks.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    })
    .addCase(getTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    })
    .addCase(getSpecificTasks.fulfilled, (state, action) => {
      state.tasks = [action.payload];
    })
  },
});

export default taskSlice.reducer;