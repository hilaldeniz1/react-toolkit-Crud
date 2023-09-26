import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Navbar Düzenleme",
      author: "Mehmet",
      assigned_to: "Hasan",
      end_date: "2023/10/25",
    },
    {
      id: 2,
      title: "Footer Animasyon",
      author: "Ahmet ",
      assigned_to: "Veli",
      end_date: "2023/10/28",
    },
  ],
};

const crudSlice = createSlice({
  name: "crudSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      action.payload.id = new Date().getTime();
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      const newTasks = state.tasks.filter((i) => i.id !== action.payload);
      state.tasks = newTasks;
    },
  },
});
//console.log(crudSlice)
export const { addTask, removeTask } = crudSlice.actions;

export default crudSlice.reducer;
