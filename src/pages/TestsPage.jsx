import React, { useEffect } from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests } from '../store/slices/allTestsSlice';
import Loader from '../components/Loader';

function TestsPage() {
  const dispatch = useDispatch();
  const tests = useSelector((state) => state.tests.tests);
  const loading = useSelector((state) => state.tests.loading);

  useEffect(() => {
    if (!tests.length) dispatch(fetchTests());
  }, [tests, dispatch]);

  return (
    <Container fluid className="text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Тесты</h2>
          <CardColumns className='d-sm-inline-flex justify-content-sm-around'>
            {tests.map((test) => (
              <Link key={test.id} to={`/tests/${test.id}`} className="card-test-link">
                <div className="card card-test mb-3">
                  <img src={test.image_url} className="card-img-top" alt={test.name} />
                  <div className="card-body">
                    <h5 className="card-title">{test.name}</h5>
                  </div>
                </div>
              </Link>
            ))}
          </CardColumns>
        </>
      )}
    </Container>
  );
}

export default TestsPage;