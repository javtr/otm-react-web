import React, { useEffect, useState, useContext } from 'react';
import { ReviewsDataEn, ReviewsDataEs } from "../../assets/info/reviewsData";
import LanguageContext from "../../context/langContext.js";
import FeatureTest from '../pure/featureTest';
import ModalReviewCont from '../pure/modalReviewCont';
import Testimony from '../pure/testimony';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ModalReview from '../pure/modalReview';


export default function TestimonyCont() {
  const { lang, setLang } = useContext(LanguageContext);
  const [content, setContent] = useState([]);
  const [indexContent, setIndexContent] = useState(0);
  const [abierto, setAbierto] = useState(false);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1000000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 375 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 375, min: 0 },
      items: 1
    }
  };


  useEffect(() => {
    if (lang == "en") {
      setContent(ReviewsDataEn);
    } else if (lang == "es") {
      setContent(ReviewsDataEs);
    } else {
      setContent(ReviewsDataEn);
    }
  }, [lang]);


  function abrirModal(index) {
    setIndexContent(index);
    setAbierto(true);
    disableScroll();
  }

  function cerrarModal() {
    setAbierto(false);
    enableScroll();
  }

  
  function disableScroll() {
    document.body.classList.add("stop-scrolling");
  }

  function enableScroll() {
    document.body.classList.remove("stop-scrolling");
  }





  return (
    <div className='testimony global__cont'>

      <h2 className='testimony__title'>User Reviews</h2>


      {content.length > 0 ?
        <Carousel responsive={responsive}>
          <div key={0}
            onClick={() => {
              abrirModal(0);
            }}
          >
            <FeatureTest index={0} review={content[0]}
            >
            </FeatureTest>
          </div>

          <div key={1}
            onClick={() => {
              abrirModal(1);
            }}
          >
            <FeatureTest index={1} review={content[1]}
            >
            </FeatureTest>
          </div>

          <div key={2}
            onClick={() => {
              abrirModal(2);
            }}
          >
            <FeatureTest index={2} review={content[2]}
            >
            </FeatureTest>
          </div>

        </Carousel>
        :
        <></>
      }





      {abierto ? (
          <ModalReview cerrar={cerrarModal} index={indexContent}></ModalReview>
      ) : (
       null
      )}


      {/* <ModalReviewCont
      index={indexContent}
      abierto={abierto}
      cerrar={cerrarModal}
      ></ModalReviewCont> */}



    </div>
  )
}
