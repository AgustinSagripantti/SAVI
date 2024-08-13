import Slider from 'react-slick';
import './banner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';

const images = [
  'URL_DE_TU_IMAGEN_1',
  'URL_DE_TU_IMAGEN_2',
  'URL_DE_TU_IMAGEN_3',
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: '0px', padding: '0', display: 'flex', listStyleType: 'none' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <button>
        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '10px' }} />
      </button>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section id='inicio'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="carruselImagen"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay"></div>
              <div className="texto">
                <h1 className="eslogan">Inteligencia de Agrovisión</h1>
                <h2 className="nombre">SAVI</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        right: '15px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 2,
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '25px', color: 'white' }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '15px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 2,
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '25px', color: 'white' }} />
    </div>
  );
};

export default Banner;
