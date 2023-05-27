import { useParams } from 'react-router-dom';

function SingleLessonPage() {
  const { id } = useParams();
  console.log(id);
  return <h2>lesson-{id}</h2>;
}

export default SingleLessonPage;
