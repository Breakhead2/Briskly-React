import { useParams } from 'react-router-dom';
import Exercise from '../components/ExerciseComponent/Exercise';

function SingleLessonPage() {
  const { id } = useParams();

  const data = {
    course_id: 1,
    heading: "Глагол to be в Present Simple (в простом настоящем времени)",
  }

  return (
    <div className="container-fluid text-center py-5">
      <h2 className="mb-5">{data.heading}</h2>
      <div className="lesson_content">
        <p>To be, oдин из редких английских глаголов, имеющих, нечто похожее на сопряжение глаголов в русском языке. Но всё намного проще.</p>
        <p className='lesson_content_subheading'>To be в <span className='lesson_content_marker'>Present Simple</span> имеет всего 3 формы:</p>
        <ul>
          <li>
          <span className='lesson_content_marker'>Am</span> - употребляется в первом лице ед. числе. Например: I <span className='lesson_content_marker'>am</span> a ticher.
          </li>
          <li>
          <span className='lesson_content_marker'>Are</span> - упротребляется:
            <ul>
              <li>
                во 2-ом лице ед. числе. Например: You <span className='lesson_content_marker'>are</span> my old friend.
              </li>
              <li>
                во множественном числе для всех лиц. Например: We <span className='lesson_content_marker'>are</span> good boys. You <span className='lesson_content_marker'>are</span> happy people. They <span className='lesson_content_marker'>are</span> funny guys.
              </li>
            </ul>
          </li>
          <li>
          <span className='lesson_content_marker'>Is</span> - употребляется в 3-ем лице ед. числе. Например: He(she) <span className='lesson_content_marker'>is</span> the best student. It <span className='lesson_content_marker'>is</span> a very difficult task. 
          </li>
        </ul>
        <p className='lesson_content_subheading'>Полная и сокращенная формы глагола to be в настоящем времени:</p>
        <ul>
          <li>I am - I'm</li>
          <li>You are - You're</li>
          <li>He is - He's</li> 
          <li>She is - She's</li> 
          <li>It is - It's</li> 
          <li>They are - They're</li> 
          <li>We are - We're</li> 
        </ul>
        <div className='lesson_content_advise'>
          Помните, что в английском предложении в отличие от русского ВСЕГДА ЕСТЬ ГЛАГОЛ.
        </div>
      </div>
      <div className='video_container'>
      <h2 className="mb-5">Видеоурок</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gAueBx2YFzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* <img src="/img/video-player-placeholder.gif" alt="..." /> */}
      <h2 className="mb-5">Упражнения для закрепления материала</h2>
      <Exercise />
      <button className='btn btn-primary px-4'>Список уроков</button>
    </div>
  );
}

export default SingleLessonPage;
