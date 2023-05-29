import { useParams } from 'react-router-dom';
import EnglishQuiz from '../components/english-quiz/EnglishQuiz';

function SingleTestPage() {
  const { id } = useParams();

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">Тест-{id}</h2>
      <EnglishQuiz />
    </div>
  );
}

export default SingleTestPage;