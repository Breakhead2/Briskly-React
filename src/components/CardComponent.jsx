import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardComponent({ img, title, description, linkPath, complete }) {
  return (
    <div className="col col-xl-4 col-md-6 col-12 p-3 w-100">
      <Card className="h-100" style={{ overflow: 'hidden' }}>
        {complete && (
          <div
            className="position-absolute d-flex align-items-center justify-content-center p-2"
            style={{
              background: 'lightgreen',
              right: '-32%',
              top: '10%',
              transform: 'rotate(45deg)',
              width: '100%',
            }}
          >
            <i
              className="fa fa-check-circle fa-2x text-primary"
              aria-hidden="true"
            ></i>
            <span className="ml-2 text-primary">Пройден</span>
          </div>
        )}
        <Card.Img variant="top" src={img} style={{ objectFit: 'cover' }} />
        <Card.Body>
          {title && <Card.Title>{title}</Card.Title>}
          {description && <Card.Text>{description}</Card.Text>}
        </Card.Body>
        <Card.Footer className="bg-light">
          {linkPath && <Link to={linkPath}>Перейти</Link>}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardComponent;
