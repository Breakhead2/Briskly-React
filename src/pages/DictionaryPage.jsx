import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDictinary } from "../store/slices/dictionarySlice";
import declension from "../services/declension";
import WordCardComponent from "../components/WordCardComponent";

function DictionaryPage() {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.dictionary);
  const [repeatWordsId, setRepeatWordsId] = useState([]);

  useEffect(() => {
    if (!dictionary.length) dispatch(fetchDictinary());
  }, [dictionary, dispatch]);

  const addRepeatWord = (target) => {
    const wordId = target.closest("div[data-word]").getAttribute('data-word');
    if (repeatWordsId.includes(wordId)) {
      let index = repeatWordsId.indexOf(wordId);
      repeatWordsId.splice(index, 1);
      setRepeatWordsId([...repeatWordsId]);
    } else {
      setRepeatWordsId([...repeatWordsId, wordId]);
    }
  };
  const removeWordFromDictionary = () => {};
  const editCardWord = () => {};

  return (
    <div className="container-fluid text-center mb-5">
      <h2 className="dictionary__heading mb-5">Мой словарь</h2>
      <div className="dictionary__toolbar">
        <div className="dictionary__toolbar_statistic">
          <p>
            Повторить сегодня:
            <span className="words words-red" id="repeat_words">
              {declension(repeatWordsId.length, ["слово", "слова", "слов"])}
            </span>
          </p>
          <p>
            Слов в словаре:
            <span className="words words-green" id="all_words">
              {declension(dictionary?.length, ["слово", "слова", "слов"])}
            </span>
          </p>
        </div>
        <button className="btn btn-primary px-4">Тренировать слова</button>
      </div>
      <div>
        <h4 className="dictionary__subheading mb-4">Коллекция слов</h4>
        <div className="d-flex justify-content-center">
          <div className="row w-100">
            <WordCardComponent addRepeatWord={addRepeatWord} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DictionaryPage;
