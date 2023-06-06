import { useSelector } from 'react-redux';
import CourseComponent from '../components/coursecomponent/CourseComponent';

function CoursesPage() {
  const courses = useSelector((state) => state.courses.courses);

  return <CourseComponent courses={courses} />;
}

export default CoursesPage;
