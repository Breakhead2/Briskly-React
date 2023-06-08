import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/coursesSlice';
import allLessons from './slices/allLessonsSlice';
import lesson from './slices/lessonSlice';
import profile from './slices/profileSlice';
import errorModal from './slices/errorModalSlice';

export const store = configureStore({
  reducer: { courses, allLessons, lesson, profile, errorModal },
});
