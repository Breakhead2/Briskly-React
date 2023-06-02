import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CoursesPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8010/proxy/api/get/courses')
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Курсы</h2>
      <div className="d-flex justify-content-center">
        <div className="row row-cols-3">
          {data?.courses?.map((course) => (
            <div key={course.id} className="col mb-3">
              <Card>
                <Card.Img variant="top" src={course.image_url} />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Link
                    to={course.id === 1 ? `/courses/${course.id}` : '#'}
                    style={
                      course.id === 1 ? {} : { color: '#ccc', cursor: 'auto' }
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
    </div>
  );
}

export default CoursesPage;
