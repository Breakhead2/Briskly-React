import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TestsPage() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8010/proxy/api/get/tests')
      .then((response) => {
        if (response.data.success) setTests(response.data.tests);
      })
      .catch((error) => console.log(error));
  }, []);

  // const tests = [
  //   { id: 1, title: 'тест-1' },
  //   { id: 2, title: 'tests-2' },
  //   { id: 3, title: 'tests-3' },

  // ];
  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Тесты</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3">
          {tests.map((test) => (
            <div key={test.id} className="col mb-3 card-test">
              <Link to={`/tests/${test.id}`}>
                <Card className="card-test">
                  <Card.Img variant="top" src={test.image_url} />
                  <Card.Body>
                    <Card.Title>{test.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestsPage;
