import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchallLessons } from '../store/slices/allLessonsSlice';
import Loader from '../components/Loader';
import CardComponent from '../components/CardComponent';

function LessonsPage() {
  const { id } = useParams();
  const loading = useSelector((state) => state.allLessons.loading);
  const lessons = useSelector((state) => state.allLessons.lessons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallLessons(id));
  }, [dispatch, id]);

  return (
    <div className="container-fluid text-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">Уроки</h2>
          <div className="d-flex justify-content-center">
            <div className="row w-100">
              {lessons.map(({ id, image, heading }) => {
                return (
                  <CardComponent
                    key={id}
                    img={image}
                    title={heading}
                    complete={true}
                    linkPath={`/lessons/${id}`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LessonsPage;
