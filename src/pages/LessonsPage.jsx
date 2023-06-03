import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchallLessons } from '../store/slices/allLessonsSlice';
import { Card } from 'react-bootstrap';
import Loader from '../components/Loader';

function LessonsPage() {
  const { id } = useParams();
  const loading = useSelector((state) => state.allLessons.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallLessons(id));
  }, [dispatch, id]);

  const lessons = useSelector((state) => state.allLessons.lessons);

  return (
    <div className="container-fluid text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Уроки</h2>
          <div className="d-flex justify-content-center">
            <div className="row row-cols-3 w-100">
              <div className="col mb-3">
                {lessons.map((lesson) => {
                  return (
                    <Card key={lesson.id}>
                      <Card.Img variant="top" src={lesson.image} />
                      <Card.Body>
                        <Card.Title>{lesson.heading}</Card.Title>
                        <Link
                          to={`/courses/${id}/${lesson.id}`}
                          key={lesson.id}
                        >
                          Перейти
                        </Link>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LessonsPage;
