import MainCarousel from '../components/MainCarousel';
import CarouselReviews from '../components/carousel_reviews/CarouselReviews'
import CarouselReviewsHeader from '../components/carousel_reviews/CarouselReviewsHeader';


function Homepage() {
  return (
  <>
  <MainCarousel/>,
  <CarouselReviewsHeader/>,
  <CarouselReviews/>
  </>
  )
}

export default Homepage;
