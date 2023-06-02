import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function LessonsPage() {
  const { id } = useParams();

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Уроки</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3 w-100">
          <div className="col mb-3">
            <Card>
              <Card.Img variant="top" src="/img/lesson-placeholder.svg" />
              <Card.Body>
                <Card.Title>Глагол "to be" в Present Simple</Card.Title>
                <Card.Text>Глагол "to be" в Present Simple</Card.Text>
                <Link to={`/courses/${id}/1`}>Перейти</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsPage;
