import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Exercise from '../components/ExerciseComponent/Exercise';
import axios from 'axios';

function SingleLessonPage() {
  const [singleLesson, setSingleLesson] = useState({});
  const { lessonId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8010/proxy/api/get/lesson?id=${lessonId}`)
      .then((res) => setSingleLesson(res.data));
  }, [lessonId]);

  const html = { __html: singleLesson.lesson?.text };

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">{singleLesson?.lesson?.heading}</h2>
      <div dangerouslySetInnerHTML={html}></div>
      <div className="video_container">
        <h2 className="mb-5">Видеоурок</h2>
        <iframe
          width="560"
          height="315"
          src={singleLesson.lesson?.video_link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      {/* <img src="/img/video-player-placeholder.gif" alt="..." /> */}
      <h2 className="mb-5">Упражнения для закрепления материала</h2>
      <Exercise questions={singleLesson?.questions} />
      <button className="btn btn-primary px-4">Список уроков</button>
    </div>
  );
}

export default SingleLessonPage;
