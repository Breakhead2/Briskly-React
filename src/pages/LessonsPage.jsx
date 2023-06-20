import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchallLessons } from '../store/slices/allLessonsSlice';
import CardComponent from '../components/CardComponent';
import Sceleton from '../components/Sceleton';

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
      <h2 className="mb-5">Уроки</h2>
      {loading ? (
        <Sceleton />
      ) : (
        <>
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
