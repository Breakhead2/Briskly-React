import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestsPage() {
  const tests = [
    { id: 1, title: 'тест-1' },
    { id: 2, title: 'tests-2' },
    { id: 3, title: 'tests-3' },
 
  ];
  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Тесты</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3">
          {tests.map((test) => (
            <div key={test.id} className="col mb-3">
              <Card>
                <Card.Img variant="top" src="img/English-Quiz.webp" />
                <Card.Body>
                  <Card.Title>{test.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to={`/tests/${test.id}`}>Перейти</Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestsPage;