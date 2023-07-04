import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCurrentWord } from '../store/slices/repeatWordsSlice';

function RepeatWord({ type, types, currentWord }) {
  const repeatWords = useSelector((state) => state.repeatWords.wordsToRepeat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentWord(repeatWords[0]));
  }, [dispatch, setCurrentWord]);

  return (
    <span className="text-primary">
      {type === types.ru ? currentWord?.value : currentWord?.translate}
    </span>
  );
}

export default RepeatWord;
