import { createSlice } from '@reduxjs/toolkit';
import { logOut } from "../auth/operations";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, handleRejected)
            .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addTask.rejected, handleRejected)
            .addCase(deleteTask.pending, handlePending)
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex((task) => task.id === action.payload.id);
                state.items.splice(index, 1);
                // варіант видалення з пагінацією
                // state.items = state.items.filter((task) => task.id !== action.payload.id);
                // варіант видалення якщо немає пагінації
            })
            .addCase(deleteTask.rejected, handleRejected)
            .addCase(toggleCompleted.pending, handlePending)
            .addCase(toggleCompleted.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.id
                );
                state.items.splice(index, 1, action.payload);
            })
            .addCase(toggleCompleted.rejected, handleRejected)
            .addCase(logOut.fulfilled, (state) => {
                state.items = [];
                state.error = null;
                state.isLoading = false;
            });

    }
});


export const tasksReducer = tasksSlice.reducer;