import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/coursesSlice';
import allLessons from './slices/allLessonsSlice';
import lesson from './slices/lessonSlice';

export const store = configureStore({
  reducer: { courses, allLessons, lesson },
});
