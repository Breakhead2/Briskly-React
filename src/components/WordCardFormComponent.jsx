import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddNewWord } from "../store/slices/dictionarySlice";
import { fetchEditWord } from "../store/slices/wordSlice";
import ImageUploader from "./ImageUploader";
import { Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { fetchClearForm } from "../store/slices/wordSlice";

function WordCardFormComponent({ setShow, show }) {
  let word = useSelector((state) => state.word.word);
  const location = useLocation();
  const [base64, setBase64] = useState("");
  const [value, setValue] = useState("");
  const [translate, setTranslate] = useState("");
  const [wordId, setWordId] = useState(null);

  const dispatch = useDispatch();
  const handlerSendForm = (e) => {
    e.preventDefault();
    location.search = "";
    const data = {
      image: base64,
      word: value,
      translate,
      wordId,
    };
    dispatch(fetchAddNewWord(data));
    dispatch(fetchClearForm());
    setShow(!show);
  };

  const closeForm = () => {
    setShow(!show);
    location.search = "";
    dispatch(fetchClearForm());
  };

  useEffect(() => {
    if (location.search.includes("wordId")) {
      setWordId(location.search.split("=")[1]);
      dispatch(fetchEditWord(location.search.split("=")[1]));
    }
  }, [dispatch]);

  useEffect(() => {
    if (word.value) {
      setValue(word.value);
      setTranslate(word.translate);
      setBase64(word.image);
    }
  }, [word]);

  return (
    <div className="popup-formword">
      <form>
        <span className="popup-close" onClick={closeForm}>
          ×
        </span>
        <ImageUploader setImageBase64={setBase64} initialBase64={base64} />
        <Card.Body>
          <Card.Title>
            <input
              className="input-form"
              type="text"
              placeholder="Слово"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Card.Title>
          <Card.Text>
            <input
              className="input-form"
              type="text"
              placeholder="Перевод"
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
            />
          </Card.Text>
        </Card.Body>
        <button
          type="submit"
          className="btn btn-primary px-4 mb-4"
          onClick={handlerSendForm}
        >
          {location.search.includes("wordId")
            ? "Изменить слово"
            : "Добавить слово"}
        </button>
      </form>
    </div>
  );
}

export default WordCardFormComponent;
