import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

function LessonsPage() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8010/proxy/api/get/lessons?id=${id}`)
      .then((response) => {
        if (response.data.success) {
          setLessons(response.data.lessons);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

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
                {lessons?.map((lesson) => {
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
