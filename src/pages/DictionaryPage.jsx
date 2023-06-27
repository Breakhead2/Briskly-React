import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDictinary,
  fetchRemoveWord,
} from "../store/slices/dictionarySlice";
import declension from "../services/declension";
import WordCardComponent from "../components/WordCardComponent";

function DictionaryPage() {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.dictionary);
  const [repeatWordsId, setRepeatWordsId] = useState([]);
  const [myDictionary, setMyDictinary] = useState(dictionary);

  useEffect(() => {
    dispatch(fetchDictinary());
    setMyDictinary(dictionary);
  }, [dictionary, dispatch]);

  const addRepeatWord = (target) => {
    const wordId = target.closest("div[data-word]").getAttribute("data-word");
    if (repeatWordsId.includes(wordId)) {
      const index = repeatWordsId.indexOf(wordId);
      repeatWordsId.splice(index, 1);
      setRepeatWordsId([...repeatWordsId]);
    } else {
      setRepeatWordsId([...repeatWordsId, wordId]);
    }
  };
  const removeWordFromDictionary = (target) => {
    const wordId = target.closest("div[data-word]").getAttribute("data-word");
    const newDictionart = myDictionary.filter((item) => item.id !== +wordId);
    setMyDictinary([...newDictionart]);
    dispatch(fetchRemoveWord(wordId));
  };
  // const editCardWord = () => {};

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
            В словаре:
            <span className="words words-green" id="all_words">
              {declension(myDictionary?.length, ["слово", "слова", "слов"])}
            </span>
          </p>
        </div>
        <div className="dictionary__toolbar_buttons">
          <button className="btn btn-primary px-4">Тренировать слова</button>
          <button className="btn btn-primary px-4">Добавить слово</button>
        </div>
      </div>
      <div>
        <h4 className="dictionary__subheading mb-4">Коллекция слов</h4>
        <div className="d-flex justify-content-center">
          <div className="row w-100">
            {myDictionary?.length ? (
              myDictionary.map((word) => (
                <WordCardComponent
                  key={word.id}
                  id={word.id}
                  value={word.value}
                  translate={word.translate}
                  addRepeatWord={addRepeatWord}
                  removeWordFromDictionary={removeWordFromDictionary}
                  articleId={word.article_id}
                  img={word.image}
                />
              ))
            ) : (
              <p style={{ margin: "0 auto" }}>Ваш словарь пуст.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DictionaryPage;
