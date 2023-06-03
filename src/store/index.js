import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/coursesSlice';
import lesson from './slices/lessonSlice';

export const store = configureStore({ reducer: { courses, lesson } });
