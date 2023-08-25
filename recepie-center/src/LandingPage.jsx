import { useEffect } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    document.title ='Recepie Center';
  }, []);

  return (
    <div className="LandingPage">
      <div className="left-side-container">
        <h1 className="slogan">Make your next meal enjoyable</h1>
        <p className="product-description">Show us your fridge and we will give you meal recommendations.</p>
      
        <div className="button-container">
          <a href='#'><img className='google-play-badge badge' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'></img></a>
          <a href='#'><img className='appstore-badge badge'src='https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg'></img></a>
        </div>
        <Link className="try-now" to='/search'><button>Try Now</button></Link>
      </div>

      <img className='culinary-arts-img' src='./culinary-arts.png'></img>
    </div>
  )
}

export default LandingPage;