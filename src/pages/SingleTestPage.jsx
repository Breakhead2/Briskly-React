import { useParams, useNavigate } from 'react-router-dom';
// import EnglishQuiz from '../components/english-quiz/EnglishQuiz';
import TestComponent from '../components/TestComponent/TestComponent';

function SingleTestPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="container-fluid text-center py-5">
      {/* <h2 className="mb-5">Тест-{id}</h2> */}
      {/* <EnglishQuiz /> */}
      <TestComponent testId={id} />
      <button onClick={goBack} className="btn btn-primary px-4">
        Список тестов
      </button>
    </div>
  );
}

export default SingleTestPage;
