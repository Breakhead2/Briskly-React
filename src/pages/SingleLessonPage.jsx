import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Exercise from '../components/ExerciseComponent/Exercise';
import { fetchLesson } from '../store/slices/lessonSlice';
import Loader from '../components/Loader';

function SingleLessonPage() {
  const { id, lessonId } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.lesson.loading);

  useEffect(() => {
    dispatch(fetchLesson(lessonId));
  }, [dispatch, lessonId]);

  const lesson = useSelector((state) => state.lesson.lesson);

  const html = { __html: lesson?.lesson.text };

  return (
    <div className="container-fluid text-center py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="mb-5">{lesson?.lesson.heading}</h2>
          <div dangerouslySetInnerHTML={html}></div>
          <div className="video_container">
            <h2 className="mb-5">Видеоурок</h2>
            <iframe
              width="560"
              height="315"
              src={lesson?.lesson.video_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="mb-5">Упражнения для закрепления материала</h2>
          <Exercise questions={lesson?.questions} />
          <Link to={`/courses/${id}`} className="btn btn-primary px-4">
            Список уроков
          </Link>
        </>
      )}
    </div>
  );
}

export default SingleLessonPage;
