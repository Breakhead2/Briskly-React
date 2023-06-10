import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './TestComponent.module.css';
import MainCompoent from './MainComponent/MainComponent';
import PopupComponent from '../ExerciseComponent/PopupComponent';

function TestComponent({ testId }) {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [points, setPoints] = useState(0);
  const [errors, setErrors] = useState(0);

  const handleRepeat = () => {
    setIsEnd(false);
    setCounter(0);
    setPoints(0);
    const blocks = document.querySelectorAll('.block');
    for (let block of blocks) {
      block.className = 'block';
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8010/proxy/api/get/test?id=${testId}`)
      .then((response) => {
        if (response.data.success) setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [testId]);

  return (
    <div className={style.main}>
      <h1 className={style.heading}>{data.test_name}</h1>
      <MainCompoent
        questions={data.questions}
        counter={counter}
        setCounter={setCounter}
        setIsEnd={setIsEnd}
        points={points}
        setPoints={setPoints}
        errors={errors}
        setErrors={setErrors}
      />
      {isEnd && (
        <PopupComponent
          questions={data.questions.length}
          points={points}
          handleRepeat={handleRepeat}
          repeat={errors}
          test={true}
        />
      )}
    </div>
  );
}

export default TestComponent;
