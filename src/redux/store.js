
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { filtersReducer } from './filter/filtersSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
        filters: filtersReducer,
    },
});


