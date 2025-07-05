import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import exploroImg from "./assets/exploro.jpeg";
import pokemonFighters from "./assets/pokemonFighters.png";
import mixologyMasterImg from './assets/mixologymaster.jpg'

const portfolioData = [
  {
    className: "grid-item product website",
    videoLink: "",
    title: "Exploro.com",
    category: "Travel Website",
    imgSrc: exploroImg,
    imgTitle: "exploro",
    imgAlt: "exploro",
    isVideo: false,
    link: "https://explorogroup.com/"
  },
  {
    className: "grid-item product website",
    videoLink: "",
    title: "Pokemon Fighters",
    category: "Video Game Website",
    imgSrc: pokemonFighters,
    imgTitle: "pokemonfighters",
    imgAlt: "pokemon-fighters",
    isVideo: false,
    link: "https://pokemonfighters.netlify.app" 
  },
  {
    className: "grid-item product website",
    videoLink: "",
    title: "Mixology Master",
    category: "API Practice Website",
    imgSrc: mixologyMasterImg,
    imgTitle: "MixologyMaster",
    imgAlt: "mixology-master",
    isVideo: false,
    link: "https://mixologymaster.netlify.app/" //look into possibly iframing these so they dont leave portfolio!
  },
];

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item"
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);


  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              Websites
            </li>
            {/* <li
              className={`c-pointer ${activeBtn("website")}`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Websites
            </li>
            <li
              className={`c-pointer ${activeBtn("stage")}`}
              onClick={handleFilterKeyChange("stage")}
              data-filter=".stage"
            >
              Stage Lighting
            </li> */}
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          {portfolioData.map((item, index) => {
            return (
              <a target="_blank" rel="noreferrer" href={item?.link} key={index}>
                <div className={item?.className}>
                  <div className="portfolio-box-01">
                    <div className="portfolio-info">
                      <h5 className="white-color font-weight-bold">
                        {item?.title}
                      </h5>
                      <span>{item?.category}</span>
                    </div>
                    <div className="portfolio-img">
                      <Image
                        src={item?.imgSrc}
                        objectFit="contain"
                        layout="intrinsic"
                        title={item?.imgTitle}
                        alt={item?.imgAlt}
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
