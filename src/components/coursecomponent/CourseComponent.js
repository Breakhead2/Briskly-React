import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from './../Loader';

function CourseComponent({ courses }) {
  const loading = useSelector((state) => state.courses.loading);

  return (
    <div className="container-fluid text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Курсы</h2>
          <div className="d-flex justify-content-center">
            <div className="row row-cols-3 w-100">
              {courses.map((course) => (
                <div key={course.id} className="col mb-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={course.image_url}
                      style={{ objectFit: 'cover', height: '250px' }}
                    />
                    <Card.Body>
                      <Card.Title>{course.name}</Card.Title>
                      <Card.Text
                        style={{ height: '100px', overflow: 'scroll' }}
                      >
                        {course.description}
                      </Card.Text>
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
