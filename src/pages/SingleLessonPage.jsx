import { useParams } from 'react-router-dom';

function SingleLessonPage() {
  const { id } = useParams();

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Lesson-{id}</h2>
      <img src="/img/video-player-placeholder.gif" alt="..." />
    </div>
  );
}

export default SingleLessonPage;
