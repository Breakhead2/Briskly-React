import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carouselReviews.css';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../store/slices/modalSlice';
import { useNavigate } from 'react-router-dom';

function CarouselReviews() {
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const linkHandle = () => {
    if (profile) navigate('/review');
    else {
      dispatch(
        showModal({
          reason: 'authRequire',
          message: 'Оставлять отзывы могут только авторизованные пользователи',
        })
      );
    }
  };

  return (
    <>
      <div className="container text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3">Отзывы</h5>
        <h1>Что говорят наши студенты?</h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Carousel className="owl-carousel testimonial-carousel">
            <Carousel.Item className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
              <h4 className="font-weight-normal mb-4">
                Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                elitr dolore et eos labore, stet justo sed est sed. Diam sed sed
                dolor stet amet eirmod eos labore diam
              </h4>
              <img
                className="img-fluid mx-auto mb-3"
                src="img/testimonial-1.jpg"
                alt=""
              />
              <h5 className="m-0">Дмитрий</h5>
              <span>Разработчик</span>
            </Carousel.Item>
          </Carousel>
          <div className="text-center py-3">
            <Button onClick={linkHandle}>Написать отзыв</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselReviews;
