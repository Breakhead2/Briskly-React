import { useState } from "react";
import declension from "../services/declension";
import WordCardComponent from "../components/WordCardComponent";

function DictionaryPage() {
  const [repeatWords, setRepeatWords] = useState([]);
  return (
    <div className="container-fluid text-center mb-5">
      <h2 className="dictionary__heading mb-5">Мой словарь</h2>
      <div className="dictionary__toolbar">
        <div className="dictionary__toolbar_statistic">
          <p>
            Повторить сегодня:{" "}
            <span className="words words-red" id="repeat_words">
              {declension(repeatWords.length, ["слово", "слова", "слов"])}
            </span>
          </p>
          <p>
            Слов в словаре:{" "}
            <span className="words words-green" id="all_words">
              20 слов
            </span>
          </p>
        </div>
        <button className="btn btn-primary px-4">Тренировать слова</button>
      </div>
      <div>
        <h4 className="dictionary__subheading mb-4">Коллекция слов</h4>
        <div className="d-flex justify-content-center">
          <div className="row w-100">
            <WordCardComponent setRepeatWords={setRepeatWords} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DictionaryPage;
