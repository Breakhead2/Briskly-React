import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/coursesSlice';
import allLessons from './slices/allLessonsSlice';
import lesson from './slices/lessonSlice';
import profile from './slices/profileSlice';
import modal from './slices/modalSlice';
import tests from './slices/allTestsSlice';
import test from './slices/testSlice';
import notification from './slices/notificationSlice';

export const store = configureStore({
  reducer: {
    courses,
    allLessons,
    lesson,
    profile,
    modal,
    tests,
    test,
    notification,
  },
});
