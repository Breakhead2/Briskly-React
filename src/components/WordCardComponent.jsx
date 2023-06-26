import { Card } from "react-bootstrap";
import { BsTrash, BsFillPencilFill, BsFillStarFill } from "react-icons/bs";

function WordCardComponent({ setRepeatWords }) {
  const addRepeatWord = (e) => {
    debugger;
    const card = e.target.value.closest("div[data-word]");
    console.log(card);
  };
  return (
    <div className="col col-xl-4 col-md-6 col-12 p-3 w-100">
      <Card
        className="h-100"
        style={{ overflow: "hidden", position: "relative" }}
        data-word="1"
      >
        <Card.Img
          variant="top"
          src="/img/word_1.png"
          alt="word"
          style={{ objectFit: "cover" }}
        />
        <div className="word__tools">
          <BsTrash />
          <BsFillPencilFill />
          <BsFillStarFill onClick={() => console.log("test")} />
        </div>
        <Card.Body>
          <Card.Title>Value</Card.Title>
          <Card.Text>Translate</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WordCardComponent;
