import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LessonsPage() {
  const lessons = [
    { id: 1, title: 'lesson-1' },
    { id: 2, title: 'lesson-2' },
    { id: 3, title: 'lesson-3' },
    { id: 4, title: 'lesson-4' },
    { id: 5, title: 'lesson-5' },
  ];
  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Lessons page</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="col mb-3">
              <Card>
                <Card.Img variant="top" src="img/lesson-placeholder.svg" />
                <Card.Body>
                  <Card.Title>{lesson.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to={`/lessons/${lesson.id}`}>Перейти</Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LessonsPage;
