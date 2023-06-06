import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchCourses } from './../../store/slices/coursesSlice';
import Loader from './../Loader';
// import style from "./CourseComponent.module.css";



function CourseComponent() {
  const loading = useSelector((state) => state.courses.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const courses = useSelector((state) => state.courses.courses.slice(0, 3));

  return (
    <div className="container-fluid text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5 ">Курсы</h2>
          <div className="d-flex justify-content-center">
            <div className="row row-cols-3">
              {courses.map((course) => (
                <div key={course.id} className="col mb-3">
                  <Card>
                    <Card.Img variant="top" src={course.image_url} />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text>{course.description}</Card.Text>
                      <Link
                        to={course.id === 1 ? `/courses/${course.id}` : '#'}
                        style={
                          course.id === 1
                            ? {}
                            : { color: '#ccc', cursor: 'auto' }
                        }
                      >
                        Перейти
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
 

}

export default CourseComponent;