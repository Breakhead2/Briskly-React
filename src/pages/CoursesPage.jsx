import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/slices/coursesSlice';
import CourseComponent from '../components/coursecomponent/CourseComponent';

function CoursesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses);

  return <CourseComponent courses={courses} />;
}

export default CoursesPage;
