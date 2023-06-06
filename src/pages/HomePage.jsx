import MainCarousel from '../components/MainCarousel';
import CarouselReviews from '../components/CarouselReviews';
import CourseComponent from '../components/coursecomponent/CourseComponent';

function Homepage() {
  return (
    <>
      <MainCarousel />
     <CourseComponent/>
      <CarouselReviews />
    </>
  );
}

export default Homepage;
