import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MainCarousel() {
  return (
      <div>
    <Carousel controls={false} fade>
      <Carousel.Item>
        <img
          className="position-relative w-100"
          src="img/carousel-1.jpg"
          style={{ minHeight: '300px', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption className="d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-md-3">
              Best Online Courses
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              Best Education From Your Home
            </h1>
            <Link
              to="/"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
            >
              Learn More
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="position-relative w-100"
          src="img/carousel-2.jpg"
          style={{ minHeight: '300px', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption className="d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-md-3">
              Best Online Courses
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              Best Online Learning Platform
            </h1>
            <Link
              to="/"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
            >
              Learn More
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="position-relative w-100"
          src="img/carousel-3.jpg"
          style={{ minHeight: '300px', objectFit: 'cover' }}
          alt=""
        />
        <Carousel.Caption className="d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: '100%', maxWidth: '900px' }}>
            <h5 className="text-white text-uppercase mb-md-3">
              Best Online Courses
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              New Way To Learn From Home
            </h1>
            <Link
              to="/"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
            >
              Learn More
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className="container-fluid text-center py-5">
          <h2>Добро пожаловать на сайт BrisklyLearn!</h2>
        <div className="layer1">Добро пожаловать на путь знаний и новых возможностей!

          Проходите бесплатную регистрацию и в Вашем личном кабинете будет доступна полезная информация, а также есть ответы на интересующие Вас вопросы.
          В папке «Полезности» вы получите записи прямых эфиров и бесплатные вебинары:
          — Плюсы и минусы онлайн-обучения; — «Удаленное обучение» и др.;</div>
        </div>
      </div>
  );
}

export default MainCarousel;
