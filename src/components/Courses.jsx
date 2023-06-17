import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import { useEffect } from 'react';
import { fetchCourses } from '../store/slices/coursesSlice';
import CardComponent from './CardComponent';

function CourseComponent({ count }) {
  const loading = useSelector((state) => state.courses.loading);
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!courses.length) {
      dispatch(fetchCourses());
    }
  });

  return (
    <div className="container-fluid text-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Курсы</h2>
          <div className="d-flex justify-content-center">
            <div className="row w-100">
              {count ? (
                courses
                  .slice(0, count)
                  .map(({ id, image_url, name, description }) => (
                    <CardComponent
                      key={id}
                      img={image_url}
                      title={name}
                      description={description}
                      linkPath={`/courses/${id}`}
                    />
                  ))
              ) : (
                <>
                  {courses.map(({ id, image_url, name, description }) => (
                    <CardComponent
                      key={id}
                      img={image_url}
                      title={name}
                      description={description}
                      linkPath={`/courses/${id}`}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CourseComponent;
