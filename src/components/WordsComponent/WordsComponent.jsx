import { useState } from "react";
import axios from "axios";
import CustomCheckbox from "../CustomChechbox/CustomCheckbox";
import style from "./WordsComponent.module.css";
import getCookie from "../../services/getCookie";

function WordsComponent({ words }) {
  const [learnWordsId, setLearnWordsId] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  const sendWord = () => {
    if (learnWordsId.length) {
      const body = {
        words: learnWordsId,
      };
      axios.post("http://localhost:8010/proxy/api/send/words", body, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("api")}`,
        },
      });
    }
  };
  const handlerAddWord = (e) => {
    if (!learnWordsId.includes(e.target.id)) {
      setLearnWordsId([...learnWordsId, e.target.id]);
    } else {
      let index = learnWordsId.indexOf(e.target.id);
      learnWordsId.splice(index, 1);
      setLearnWordsId([...learnWordsId]);
    }
  };
  const hadlerCheckAll = () => {
    const words = document.querySelectorAll('input[data-word="word"]');
    if (checkedAll) {
      for (let word of words) {
        word.checked = false;
        setLearnWordsId([]);
      }
      setCheckedAll(false);
    } else {
      for (let word of words) {
        word.checked = true;
        learnWordsId.push(word.id);
        setLearnWordsId([...learnWordsId]);
      }
      setCheckedAll(true);
    }
  };

  return (
    <div>
      <h2 className="mb-5">Рекомендуем изучить</h2>

      <div className={style.btnBox}>
        <button className="btn btn-primary px-4" onClick={sendWord}>
          Добавить в словарь
        </button>
        <button className="btn btn-primary px-4" onClick={hadlerCheckAll}>
          Выбрать всё
        </button>
      </div>
      <div className={style.wordsBox}>
        {words?.map((word) => (
          <CustomCheckbox id={word.id} label={word} func={handlerAddWord} />
        ))}
      </div>
    </div>
  );
}

export default WordsComponent;