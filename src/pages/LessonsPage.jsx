import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function LessonsPage() {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios
      .get(`https://breakhd2.store/api/get/lessons?id=${id}`)
      .then((response) => {
        if (response.data.success) setLessons(response.data.lessons);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Уроки</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3 w-100">
          <div className="col mb-3">
            {lessons?.map((lesson) => {
              return (
                <Link to={`/lessons/${lesson.id}`} key={lesson.id}>
                  <Card>
                    <Card.Img variant="top" src={lesson.image} />
                    <Card.Body>
                      <Card.Title>{lesson.heading}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsPage;
